import React, {Component} from 'react';
import {Grid, Row, Col, Image} from 'react-bootstrap';

import "./Partners.css"
import SponsorsData from '../Constants/SponsorsData'
import Sponsor from '../CustomComponents/Sponsor'
import MainSponsorData from '../Constants/MainSponsorData'
import ContentDiv from '../CustomComponents/ContentDiv'




class Partners extends Component {
    render() {
        return (
            <ContentDiv className="partners">
                <Grid>
                  <h2>Sponsor Główny</h2>
                  {MainSponsorData.map((sponsor) =>
                    <Sponsor
                        title={sponsor.title}
                      imageRef={sponsor.imageRef}
                      link={sponsor.link}
                      linkFB={sponsor.linkFB}
                      linkJob={sponsor.linkJob}
                      mainSm={sponsor.mainSm}
                      subSm={sponsor.subSm}
                      xs={sponsor.xs}
                      description1={sponsor.description1}
                      description2={sponsor.description2}
                    />)}
                    {/*
                    <h3>Sponsorzy</h3>
                  {SponsorsData.map((sponsor) =>
                      <Sponsor
                        imageRef={sponsor.imageRef}
                        link={sponsor.link}
                        mainSm={sponsor.mainSm}
                        subSm={sponsor.subSm}
                        xs={sponsor.xs}
                        description1={sponsor.description1}
                      />
                  )}*/}


                    <h2>Patroni honorowi</h2>
                    <div className="patroni_div">
                        <Row classname = "patroni">
                            <Col xs={12} sm={4} className="patron_logo">
                                <a href="https://www.eaiib.agh.edu.pl/"><Image src={require('../img/partners/weaiib.jpg')} className="logoP1"  /></a>
                            </Col>
                            <Col xs={12} sm={4} className="patron_logo">
                                <a href="http://www.iet.agh.edu.pl/pl/"><Image src={require('../img/partners/wiet.jpg')} className="logoP2"  /></a>
                            </Col>
                            <Col xs={12} sm={4} className="patron_logo">
                                <a href="http://www.imir.agh.edu.pl/"><Image src={require('../img/partners/wimir.png')} className="logoP3"  /></a>
                            </Col>
                        </Row>
                    </div>
                </Grid>
            </ContentDiv>
        );
    }
}

export default Partners;
