import React, {Component} from 'react';
import {Grid, Image, Row} from 'react-bootstrap';

import "./Register.css"
import FormularData from '../Constants/FormularData'


class Register extends Component {
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
      <Row>

      </Row>
    )
  }

    render() {
        return (
            <div className="register">
                <Grid>
                  {FormularData.map((formField) => {
                    formField.isForm ? this.formularField(formField) : this.dottedField(formField)
                  })}

                    {/*<h1>A może by tak stworzyć system rejestracyjny?</h1>
                    <Image src={require('../img/elon.jpg')}/>*/}
                </Grid>
            </div>
        );
    }
}

export default Register;
