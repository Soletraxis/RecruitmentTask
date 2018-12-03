import GoogleSpreadsheet from 'google-spreadsheet';
import async from 'async';

const sendData = (data, toast, errortoast, hideModal) => {
  const doc = new GoogleSpreadsheet(process.env.REACT_APP_GOOGLESHEETID);
  let sheet;
  let emptyRowNumber;
  async.series([
      function setAuth (step) {
        const creds = require('../Recruter-c0a61ccafe08.json');

        doc.useServiceAccountAuth(creds, step);
      },
      function getInfoAndWorksheets (step) {
        doc.getInfo(function (err, info) {
          sheet = info.worksheets[0];
          step();
        });
      },
      function getFreeRowNumber(step) {
        sheet.getCells({
          'min-row': 1,
          'max-row': 1,
          'return-empty': true
        }, (err, cells) => {
            ++cells[0].value;
            sheet.bulkUpdateCells(cells)
            emptyRowNumber = cells[0].value;
            step();
          }
        )
      },
      function workingWithCells (step) {
        sheet.getCells({
          'min-row': emptyRowNumber,
          'max-row': emptyRowNumber,
          'return-empty': true
        }, function (err, cells) {
          cells[0].value = data.competitionType;
          cells[1].value = data.teamName;
          cells[2].value = Object.keys(data).length/2-1;
          Object.keys(data).filter((key) => {
            return key !== 'teamName' && key !== 'competitionType'
          }).map((key, index) => {
            cells[index + 3].value = data[key];
          })

          sheet.bulkUpdateCells(cells);

          step();
        });
      },
      (step) => {
        hideModal();
        toast();
        step();
      }
    ],
    function (err) {
      if (err) {
        errortoast();
        hideModal();
        console.log('Error: ' + err);
      }
    })
}


export default sendData;
