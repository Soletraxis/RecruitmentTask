import React, {Component} from 'react';
import {Grid, FormGroup, FormControl, ControlLabel, Form, Col, Row, Modal, Glyphicon} from 'react-bootstrap';

import "./Register.css"
import ContentDiv from '../CustomComponents/ContentDiv'

import {ToastContainer, ToastStore} from 'react-toasts';
import sendData from '../OnlineStuff/SpreadSheetGoogle'
import {Dots} from 'react-activity';
import 'react-activity/dist/react-activity.css';
import Countdown from '../CustomComponents/Countdown'


class Register extends Component {
  state = {
    isClassic: true,
    participantNumber: [1, 2],
    errors: [],
    errorMessages: {},
    modalStatus: false
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
    this.showModal();

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
      this.hideModal();
      ToastStore.error('Niepoprawnie wprowadzone dane')
    } else {
      console.log('PRZYJME')
      this.setState({
        errorMessages: {}
      })
      Object.assign(req, {competitionType: this.state.isClassic ? 'K' : 'R'})
      sendData(req, () => ToastStore.success('Twoje zgłoszenie zostało przyjęte'),
        () => ToastStore.error('Problem z połączeniem, sprawdź swoje połączenie z internetem i spróbuj ponownie'),
        () => this.hideModal()
        );
      document.getElementById('form').reset();
    }
  }

  showModal = () => {
    this.setState({
      modalStatus: true
    })
  }

  hideModal = () => {
    this.setState({
      modalStatus: false
    })
  }

  errorMessage = (field) => {
    if(this.state.errorMessages[field] !== undefined) {
      return <div>{this.state.errorMessages[field]}</div>
    }
  }

  isThereTimeLeft = () => {
    const countDownDate = new Date("Nov 26, 2018 12:00:00").getTime();
    const now = new Date().getTime();
    const endOfRegistration = new Date('Jan 4, 2019 00:00:00').getTime();
    return now > countDownDate && now < endOfRegistration
  }

  isRoboticOver = () => {
    const now = new Date().getTime();
    const roboticTime = new Date('Dec 31, 2018 00:00:00').getTime();
    return roboticTime < now
  }

    render() {
     return (
            <ContentDiv className="register">
              {this.isThereTimeLeft() ?
                <Grid>
                  {this.state.modalStatus && <Modal show className='odal' >
                    <Dots color='lightCyan'/>
                  </Modal>}
                  <Form horizontal action={f=>f} id='form'>
                    <Row>
                      <Col xsOffset={3} xs={2}>
                        <label className="checkbox-inline" onClick={() => this.changeCompetitionType(true)}><input type="checkbox" checked={this.state.isClassic}/>Część Klasyczna</label>
                      </Col>
                      <Col xsOffset={1} xs={2}>
                        <label className={`checkbox-inline ${this.isRoboticOver() ?  'gray-out' : ''}`} onClick={() => {
                          if(!this.isRoboticOver()){ this.changeCompetitionType(false)}
                        }}><input disabled={this.isRoboticOver()} type="checkbox" checked={!this.state.isClassic}/>Część Robotyczna</label>
                      </Col>
                    </Row>
                    <div>
                      <Row>
                      <Col xs={5} xsOffset={3}>
                      <FormGroup>
                        <ControlLabel>Nazwa drużyny:  </ControlLabel>
                        <FormControl placeholder='Nazwa drużyny' id={'teamName'} className={this.state.errors.includes('teamName') ? 'error' : '' }/>
                      </FormGroup>
                      </Col>
                      </Row>
                      {this.state.participantNumber.map((i) => {
                        return(
                          <Row form>
                            <div className='row-eq-height'>
                            <Col xs={5} debug>
                              <FormGroup  controlId="formHorizontalEmail" >
                                <ControlLabel>{i === 1 ? "E-mail kapitana" : 'E-mail'}</ControlLabel>
                                <FormControl id={`email${i}`} type="email" placeholder="E-mail" className={this.state.errors.includes(`email${i}`) ? 'error' : '' }/>
                              </FormGroup>
                            </Col>
                            <Col xs={5} xsOffset={1} debug>
                              <FormGroup controlId="formHorizontalEmail">
                                <ControlLabel>{i === 1 ? 'Imię i nazwisko kapitana' : 'Imię i nazwisko'}</ControlLabel>
                                <FormControl id={`name${i}`} type="text" placeholder="Imię i nazwisko" className={this.state.errors.includes(`name${i}`) ? 'error' : '' }/>
                              </FormGroup>
                            </Col>
                            {i === this.state.participantNumber.length && i > 2 &&
                            <Col xs={1} debug>
                              <div  onClick={this.decreaseParticipant} className='daas'>
                                <div className='qwe'>
                                  <Glyphicon glyph='minus'/>
                                </div>
                              </div>
                            </Col>}
                            </div>
                          </Row>
                        )})}
                    </div>
                    <Row>
                      <Col xsOffset={5} xs={1}>
                        {this.state.participantNumber.length < 4 && <Glyphicon glyph='plus' onClick={this.addParticipant}/>}
                      </Col>
                    </Row>
                    <Row>
                      <Col smOffset={4} xs={3}>
                        <button type='submit' color='orange' className='button' onClick={this.submitForm}>Zgłaszam drużynę!</button>
                      </Col>
                    </Row>

                  </Form>

                  <ToastContainer store={ToastStore} position={ToastContainer.POSITION.TOP_CENTER}/>
                    {/*<h1>A może by tak stworzyć system rejestracyjny?</h1>
                    <Image src={require('../img/elon.jpg')}/>*/}
                </Grid>
                : <Countdown/>}
            </ContentDiv>
        );
    }
}

export default Register;
