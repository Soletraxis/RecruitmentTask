import React, {Component} from 'react';
import {Grid, Image} from 'react-bootstrap';

import "./Register.css"
import ContentDiv from '../CustomComponents/ContentDiv'

class Register extends Component {
    render() {
        return (
            <ContentDiv className="register">
                <Grid>
                    <h1>Zapisy ruszają już 26 listopada!</h1>
                </Grid>
            </ContentDiv>
        );
    }
}

export default Register;
