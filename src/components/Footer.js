import React, {Component} from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import "./Footer.css"


class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <Grid>
                    <Row className="show-grid text-center">
                        <Col xs={12} sm={4} className="logo-section">
                            <Image src={require('../img/best-logo-white.svg')} className="logo"  />
                        </Col>
                        <Col xs={12} sm={4} className="organizers-section">


                            <div className="organizer-title"><strong>Koordynator projektu</strong></div>
                            <div className="organizer-name"><i className="far fa-user"></i> Michał Błasiak</div>
                            <div className="organizer-mail"><i className="far fa-envelope"></i><a href="mailto:michal.blasiak@best.krakow.pl"> michal.blasiak@best.krakow.pl</a></div>
                            <br/>

                            <a href="/regulamin.pdf">Regulamin</a>
                            <br/>
                            <a href="/przetwarzanie-danych.pdf">Informacje o przetwarzaniu danych</a>
                            {/*
                            <div className="organizer-title"><strong> Koordynator ds. kontaktu z firmami</strong></div>
                            <div className="organizer-name"><i className="far fa-user"></i> Agata Redlich</div>
                            <div className="organizer-mail"><i className="far fa-envelope"></i><a href="mailto:agata.redlich@best.krakow.pl"> agata.redlich@best.krakow.pl</a></div>
                            */}
                        </Col>
                        <Col xs={12} sm={4} className="best-section">
                            <p>
                                <h4>Stowarzyszenie Studentów<br/> BEST AGH Kraków</h4>

                                I DS Alfa Blok 1<br/>
                                Ul. Reymonta 17/E14<br/>
                                30-059 Kraków<br/><br/>
                                <i className="fa fa-globe" aria-hidden="true"></i> <a href="http://www.best.krakow.pl/">&nbsp; www.BEST.krakow.pl</a>
                            </p>
                        </Col>
                    </Row>
                </Grid>


            </div>
        );
    }
}

export default Footer;