import GoogleSpreadsheet from 'google-spreadsheet';
import async from 'async';

const sendData = (data) => {
  const doc = new GoogleSpreadsheet(process.env.REACT_APP_GOOGLESHEETID);
  let sheet;
  let freeRowNumber;
  async.series([
      function setAuth (step) {
        const creds = require('../bitehack-f53d0f56bcd4.json');

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
            freeRowNumber = cells[0].value;
            step();
          }
        )
      },
      function workingWithCells (step) {
        sheet.getCells({
          'min-row': freeRowNumber,
          'max-row': freeRowNumber,
          'return-empty': true
        }, function (err, cells) {
          cells[0].value = data.teamName;
          Object.keys(data).filter((key) => {
            return key !== 'teamName'
          }).map((key, index) => {
            cells[index + 1].value = data[key];
          })

          sheet.bulkUpdateCells(cells);

          step();
        });
      },
    ],
    function (err) {
      if (err) {
        console.log('Error: ' + err);
      }
    })
}


export default sendData;
