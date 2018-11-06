import React, {Component} from 'react';
import {Grid, Image, Row} from 'react-bootstrap';

import "./Register.css"
import firebase from 'firebase'

import {ToastContainer, ToastStore} from 'react-toasts';



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

  submitForm = (e) => {
    e.preventDefault();

    const req = {teamName: document.getElementById('teamName').value.trim()}

    this.state.participantNumber.map((i) => {
      const email = document.getElementById(`email${i}`).value.trim();
      const name = document.getElementById(`name${i}`).value.trim();
      Object.assign(req, {[`email${i}`]: email, [`name${i}`]: name});
    })
    const validation = this.validate(req);
    this.setState({errors: validation});
    if(validation.length !== 0) {
      // odrzuć

      console.log('ODRZUCAM')
      ToastStore.error('Niepoprawnie wprowadzone dane')
    } else {
      console.log('PRZYJME')

      let request = firebase.database();
      if(this.state.isClassic) {
        request = request.ref('klasyczny');
      } else {
        request = request.ref('robotyczny');
      }
      request.push(req);
      document.getElementById('form').reset();
      ToastStore.success('Twoje zgłoszenie zostało przyjęte')
    }
  }

    render() {
     return (
            <div className="register">
                <Grid>
                  <form action={f=>f} id='form'>
                    {/*todo: zrobić że jak ktoś wyśle to formularz się czyści i można jeszcze czy email jest poprawny, dodać można jeszcze automatyczne wysyłanie emaili*/}
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
                    {this.state.participantNumber.length < 4 && <span className="glyphicon glyphicon-plus-sign" onClick={this.addParticipant}/>}<br/>
                    <button type='submit' color='orange' className='button' onClick={this.submitForm}>Zgłaszam sprzeciw!</button>

                  </form>

                  <ToastContainer store={ToastStore} position={ToastContainer.POSITION.TOP_CENTER}/>
                    {/*<h1>A może by tak stworzyć system rejestracyjny?</h1>
                    <Image src={require('../img/elon.jpg')}/>*/}
                </Grid>
            </div>
        );
    }
}

export default Register;
