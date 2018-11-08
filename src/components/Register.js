import React, {Component} from 'react';
import {Grid, FormGroup, FormControl, ControlLabel, Form, Col, Row, Modal} from 'react-bootstrap';

import "./Register.css"

import {ToastContainer, ToastStore} from 'react-toasts';
import sendData from '../OnlineStuff/SpreadSheetGoogle'
import {Dots} from 'react-activity';
import 'react-activity/dist/react-activity.css';


class Register extends Component {
  state = {
    isClassic: true,
    participantNumber: [1],
    errors: [],
    errorMessages: {}
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
      const decreasedParticipantNumber = this.state.participantNumber;
      decreasedParticipantNumber.pop();

      this.setState({ participantNumber: decreasedParticipantNumber})
    }
  }

  validate = (req) => {
    const keys = Object.keys(req);

    return keys.filter((key) => {
      if(key.includes('email') && !req[key].match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)){
        const errorMessages = Object.assign(this.state.errorMessages, {[key]: 'no nie jest dobrze'})

        this.setState({errorMessages })
        return true;
      }
      return req[key].length < 3;
    })
  }

  submitForm = (e) => {
    e.preventDefault();
    console.log(document.getElementById('name1').value)
    const req = {teamName: document.getElementById('teamName').value.trim()}

    this.state.participantNumber.map((i) => {
      const email = document.getElementById(`email${i}`).value.trim();
      const name = document.getElementById(`name${i}`).value;
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
      this.setState({
        errorMessages: {}
      })
      Object.assign(req, {competitionType: this.state.isClassic ? 'K' : 'R'})
      sendData(req, () => ToastStore.success('Twoje zgłoszenie zostało przyjęte'),
        () => ToastStore.error('Problem z połączeniem, sprawdź swoje połączenie z internetem i spróbuj ponownie')
        );
      document.getElementById('form').reset();
    }
  }

  errorMessage = (field) => {
    if(this.state.errorMessages[field] !== undefined) {
      return <div>{this.state.errorMessages[field]}</div>
    }
  }

    render() {
     return (
            <div className="register">
                <Grid>
                  {/*<Modal show className='odal'>
                    <div className='modal-content'>
                    <Dots/>
                    </div>
                  </Modal>*/}
                  <Form horizontal action={f=>f} id='form'>
                    <label className="checkbox-inline" onClick={() => this.changeCompetitionType(true)}><input type="checkbox" checked={this.state.isClassic}/>Część Klasyczna</label>
                    <label className="checkbox-inline" onClick={() => this.changeCompetitionType(false)}><input type="checkbox" checked={!this.state.isClassic}/>Część Robotyczna</label>
                    <div>
                      <div className='form-group'><label>Nazwa drużyny:  </label><input type='text' id={'teamName'} className={this.state.errors.includes('teamName') ? 'error' : '' }/></div>
                      {this.state.participantNumber.map((i) => {
                        return(
                          <Row form>
                            <Col sm={4}>
                              <FormGroup  controlId="formHorizontalEmail">
                                <ControlLabel>Email</ControlLabel>
                                <FormControl id={`email${i}`} type="email" placeholder="Email"/>
                              </FormGroup>
                            </Col>
                            <Col sm={4}>
                              <FormGroup controlId="formHorizontalEmail">
                                <ControlLabel>Email</ControlLabel>
                                <FormControl id={`name${i}`} type="email" placeholder="Email" />
                              </FormGroup>
                            </Col>
                          </Row>
                          /*<FormGroup>
                            <ControlLabel>Imię</ControlLabel>
                            <FormControl
                              id={`name${i}`}
                              type='text'
                            />
                            <ControlLabel>email</ControlLabel>
                            <FormControl
                              id={`email${i}`}
                              type='text'
                            />
                          </FormGroup>
                          /*<div className="form-dupa" key={i}>
                            <div className='form-message'>
                              <label>Email:
                                <input type='text' id={`email${i}`} className={this.state.errors.includes(`email${i}`) ? 'error' : '' }/>
                              </label>
                              <br/>
                              {this.errorMessage(`email${i}`)}
                            </div>
                            <div className='form-message'>
                              <label>Imię i nazwisko:
                                <input type='text' id={`name${i}`} className={this.state.errors.includes(`name${i}`) ? 'error' : '' }/>
                              </label>

                              {i === this.state.participantNumber.length && i !== 1 &&
                              <span className="glyphicon glyphicon-minus" onClick={this.decreaseParticipant}/> }
                              <br/>
                              {this.errorMessage(`name${i}`)}
                            </div>
                          </div>*/
                        )
                      }) }
                    </div>
                    {this.state.participantNumber.length < 4 && <span className="glyphicon glyphicon-plus-sign" onClick={this.addParticipant}/>}<br/>
                    <button type='submit' color='orange' className='button' onClick={this.submitForm}>Zgłaszam sprzeciw!</button>

                  </Form>

                  <ToastContainer store={ToastStore} position={ToastContainer.POSITION.TOP_CENTER}/>
                    {/*<h1>A może by tak stworzyć system rejestracyjny?</h1>
                    <Image src={require('../img/elon.jpg')}/>*/}
                </Grid>
            </div>
        );
    }
}

export default Register;
