import React, {Component} from 'react';
import {Grid, Image, Row} from 'react-bootstrap';

import "./Register.css"
import FormularData from '../Constants/FormularData'


class Register extends Component {
  state = {
    isClassic: true,
    participantNumber: [1]
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

  formularField = (data) => {
    return(
      <div>
        <h1>{data.question}</h1>
        <input placeholder={data.placeholder}/>
      </div>
    )
  }

  dottedField = (data) => {
    return (
      <form>
        <label className="checkbox-inline"><input type="checkbox" value=""/>Option 1</label>
      </form>
    )
  }

    render() {
        return (
            <div className="register">
                <Grid>
                  <form action={f=>f}>
                    <label className="checkbox-inline" onClick={() => this.changeCompetitionType(true)}><input type="checkbox" checked={this.state.isClassic}/>Część Klasyczna</label>
                    <label className="checkbox-inline" onClick={() => this.changeCompetitionType(false)}><input type="checkbox" checked={!this.state.isClassic}/>Część Robotyczna</label>
                    <div>
                      <div className='form-group'><label>Nazwa drużyny:  </label><input type='text'/></div>
                      {this.state.participantNumber.map((i) => {
                        return(
                          <div className="form-group" key={i}>
                            <label>Email:  </label><input type='text'/>
                            <label>Imię i nazwisko: <input type='text'/></label>
                            {i === this.state.participantNumber.length && i !== 1 &&
                            <span className="glyphicon glyphicon-minus" onClick={this.decreaseParticipant}/> }
                          </div>
                        )
                      }) }
                    </div>
                    {this.state.participantNumber.length < 4 && <span className="glyphicon glyphicon-plus-sign" onClick={this.addParticipant}/>}
                  {/*{FormularData.map((formField) => {
                    formField.isForm ? this.formularField(formField) : this.dottedField(formField)
                    this.dottedField(2);
                  })}*/}
                  </form>

                  <button type='submit' color='orange' className='button' onClick={f=>f}>Zgłaszam sprzeciw!</button>
                    {/*<h1>A może by tak stworzyć system rejestracyjny?</h1>
                    <Image src={require('../img/elon.jpg')}/>*/}
                </Grid>
            </div>
        );
    }
}

export default Register;
