import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css'

class Home extends Component {
    render() {
        return (
            <Grid>
                <Jumbotron>
                    <h2>Welcome to BITEhack page </h2>
                    <p>Ta strona jest o hackathonie</p>
                </Jumbotron>
                <a href="http://www.bait.best.krakow.pl">
                    <Button bsStyle="primary" >Poprzednia edycja</Button>
                </a>
            </Grid>
        );
    }
}

export default Home;