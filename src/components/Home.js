import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css'

class Home extends Component {
    render() {
        return (
            <Grid>
                <div className="dream">
                    <h1>
                        If you can dream <strong>IT</strong><br/>
                        you can <strong>HACK IT</strong>
                    </h1>
                    <p>
                     <a  href="https://www.newsite.best.krakow.pl/">
                         Poznaj nas >
                     </a>
                    </p>
                </div>
            </Grid>
        );
    }
}

export default Home;