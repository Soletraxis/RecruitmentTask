import React, {Component} from 'react';
import {Grid, Image, Row} from 'react-bootstrap';

import "./Register.css"
import firebase from 'firebase'



class Register extends Component {
  state = {
    isClassic: true,
    participantNumber: [1],
    errors: []
  }

  changeCompetitionType = (type) => {
    this.setState({ isClassic: type })
  }

  addParticipant = () => {
    if(this.state.participantNumber.length < 4) {
      this.setState(prevState => {
        return {participantNumber: [...prevState.participantNumber, prevState.participantNumber[prevState.participantNumber.length - 1]+1]}
      })
    }
  }
  decreaseParticipant = () => {
    if(this.state.participantNumber.length > 1) {
      const dupa = this.state.participantNumber;
      dupa.pop();

      this.setState({ participantNumber: dupa})
    }
  }

  validate = (req) => {
    const chuj = Object.keys(req);

    const xd = chuj.filter((q) => {
      return req[q].length === 0;
    })

    return xd;
  }

  submitForm = () => {
    const req = {teamName: document.getElementById('teamName').value.trim()}

    this.state.participantNumber.map((i) => {
      const email = document.getElementById(`email${i}`).value.trim();
      const name = document.getElementById(`name${i}`).value.trim();
      Object.assign(req, {[`email${i}`]: email, [`name${i}`]: name});
    })
    const validation = this.validate(req);
    if(validation.length !== 0) {
      // odrzuć
      this.setState({errors: validation});
      console.log('ODRZUCAM')
    } else {
      console.log('PRZYJME')
      let request = firebase.database();
      if(this.state.isClassic) {
        request = request.ref('klasyczny');
      } else {
        request = request.ref('robotyczny');
      }
      request.push(req);
      //firebase request
    }
  }

    render() {

      console.log(this.state.errors)
        return (
            <div className="register">
                <Grid>
                  <form>
                    <label className="checkbox-inline" onClick={() => this.changeCompetitionType(true)}><input type="checkbox" checked={this.state.isClassic}/>Część Klasyczna</label>
                    <label className="checkbox-inline" onClick={() => this.changeCompetitionType(false)}><input type="checkbox" checked={!this.state.isClassic}/>Część Robotyczna</label>
                    <div>
                      <div className='form-group'><label>Nazwa drużyny:  </label><input type='text' id={'teamName'} className={this.state.errors.includes('teamName') ? 'error' : '' }/></div>
                      {this.state.participantNumber.map((i) => {
                        return(
                          <div className="form-group" key={i}>
                            <label>Email:  </label><input type='text' id={`email${i}`} className={this.state.errors.includes(`email${i}`) ? 'error' : '' }/>
                            <label>Imię i nazwisko: <input type='text' id={`name${i}`} className={this.state.errors.includes(`name${i}`) ? 'error' : '' }/></label>
                            {i === this.state.participantNumber.length && i !== 1 &&
                            <span className="glyphicon glyphicon-minus" onClick={this.decreaseParticipant}/> }
                          </div>
                        )
                      }) }
                    </div>
                    {this.state.participantNumber.length < 4 && <span className="glyphicon glyphicon-plus-sign" onClick={this.addParticipant}/>}
                  </form>

                  <button type='submit' color='orange' className='button' onClick={this.submitForm}>Zgłaszam sprzeciw!</button>
                    {/*<h1>A może by tak stworzyć system rejestracyjny?</h1>
                    <Image src={require('../img/elon.jpg')}/>*/}
                </Grid>
            </div>
        );
    }
}

export default Register;
