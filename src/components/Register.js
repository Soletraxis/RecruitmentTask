import React, {Component} from 'react';
import {Grid, Image, Row} from 'react-bootstrap';

import "./Register.css"
import FormularData from '../Constants/FormularData'


class Register extends Component {
  state = {
    isClassic: true
  }

  changeCompetitionType = (type) => {
    this.setState({ isClassic: type })
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
                  <form>
                    <label className="checkbox-inline" onClick={() => this.changeCompetitionType(true)}><input type="checkbox" checked={this.state.isClassic}/>Część Klasyczna</label>
                    <label className="checkbox-inline" onClick={() => this.changeCompetitionType(false)}><input type="checkbox" checked={!this.state.isClassic}/>Część Robotyczna</label>
                    <div>
                      {[1,2,3,4].map(() => {
                        return(<div><input type='text'/></div>)
                      }) }
                    </div>

                  {/*{FormularData.map((formField) => {
                    formField.isForm ? this.formularField(formField) : this.dottedField(formField)
                    this.dottedField(2);
                  })}*/}
                  </form>

                    {/*<h1>A może by tak stworzyć system rejestracyjny?</h1>
                    <Image src={require('../img/elon.jpg')}/>*/}
                </Grid>
            </div>
        );
    }
}

export default Register;
