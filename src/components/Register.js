import React, {Component} from 'react';
import {Grid, Image} from 'react-bootstrap';

import "./Register.css"
import ContentDiv from '../CustomComponents/ContentDiv'

class Register extends Component {
    render() {
        return (
            <ContentDiv className="register">
                <Grid>
                    <h1>A może by tak stworzyć system rejestracyjny?</h1>
                    <Image src={require('../img/elon.jpg')}/>
                </Grid>
            </ContentDiv>
        );
    }
}

export default Register;
