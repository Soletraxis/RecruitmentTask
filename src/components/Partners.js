import React, {Component} from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';

import "./Partners.css"

class Partners extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <h2>
                        Ta strona jest tylko podglądowa, będziemy ją na bieżąco budować w trakcie podpisywania umów
                    </h2>
                    <h3>Sponsor Główny</h3>
                    <Row className="SG">
                        <Col xs={12} sm={4} className="SGimg">
                            <Image src={require('../img/partners/asseco.png')} responsive/>
                        </Col>
                        <Col xs={12} sm={8} className="SGdescription">
                            <p>When things happen - enjoy them. They're little gifts. There we go. I really believe that if you practice enough you could paint the 'Mona Lisa' with a two-inch brush. This present moment is perfect simply due to the fact you're experiencing it. Now we don't want him to get lonely, so we'll give him a little friend. Just think about these things in your mind and drop em' on canvas.</p>
                            <i className="fa fa-globe" aria-hidden="true"></i> <a href="https://asseco.com" className="partnerLink">asseco.com</a>

                        </Col>
                    </Row>
                    <h3>Sponsorzy</h3>
                    <Row className="Sponsor">
                        <Col xs={12} sm={4} className="Simg">
                            <a href="https://nokia.com"><Image src={require('../img/partners/nokia.png')} responsive/></a>
                        </Col>
                        <Col xs={12} sm={8} className="Sdescription">
                            <p>Have fun with it. Zip. That easy. Working it up and down, back and forth. You can do anything your heart can imagine. It's all a game of angles. Let your heart take you to wherever you want to be.</p>
                            <i className="fa fa-globe" aria-hidden="true"></i> <a href="https://nokia.com" className="partnerLink">nokia.com</a>
                        </Col>
                    </Row>
                    <Row className="Sponsor">
                        <Col xs={12} sm={4} className="Simg">
                            <Image src={require('../img/partners/ericsson.jpg')} responsive/>
                        </Col>
                        <Col xs={12} sm={8} className="Sdescription">
                            <p>Even trees need a friend. We all need friends. Clouds are free they come and go as they please. Maybe there's a happy little Evergreen that lives here.</p>
                            <i className="fa fa-globe" aria-hidden="true"></i> <a href="https://ericsson.com" className="partnerLink">ericsson.com</a>

                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Partners;