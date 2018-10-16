import React, {Component} from 'react';
import {Grid, Image} from 'react-bootstrap';

import "./Register.css"

class Register extends Component {
    render() {
        return (
            <div className="register">
                <Grid>
                    <h1>A może by tak stworzyć system rejestracyjny?</h1>
                    <Image src={require('../img/elon.jpg')}/>
                </Grid>
            </div>
        );
    }
}

export default Register;
