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

                    {/*
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
*/}

                    <Row className="Sponsor">
                        <Col xs={12} sm={4} className="Simg">
                            <div className="Ass_img">
                                <a href="https://pl.asseco.com/kariera"><Image src={require('../img/partners/asseco.JPG')} /></a>
                            </div>
                        </Col>
                        <Col xs={12} sm={8} className="Sdescription">
                            <h3>Asseco Poland</h3>
                            <p>
                                Jesteśmy największą polską firmą informatyczną, która od ponad 25 lat tworzy zaawansowane technologicznie oprogramowanie dla firm z kluczowych sektorów gospodarki. Zatrudniamy blisko 2500 specjalistów w kilkunastu miastach w Polsce.
                            </p>
                            <p>
                                Stoimy na czele międzynarodowej grupy kapitałowej Asseco. Jesteśmy największym dostawcą nowoczesnych rozwiązań informatycznych w Europie Środkowo-Wschodniej. Ponadto w rankingu Truffle 100, zajęliśmy szóste miejsce wśród największych producentów oprogramowania w Europie.
                            </p>
                            <i className="fa fa-globe" aria-hidden="true"></i> <a href="https://pl.asseco.com/kariera" className="partnerLink">pl.asseco.com/kariera</a><br/>
                            <i className="fab fa-facebook-square fa-lg"></i> <a href="https://www.facebook.com/AssecoPolandKariera" className="partnerLink">/AssecoPolandKariera</a><br/>
                            <i className="fa fa-users fa-lg"></i> <a href="https://praca.asseco.com" className="partnerLink">praca.asseco.com</a><br/><br/>

                        </Col>

                    </Row>

                    <h2>Sponsorzy</h2>

                    {/*
                  {SponsorsData.map((sponsor) =>
                      <Sponsor
                        imageRef={sponsor.imageRef}
                        link={sponsor.link}
                        linkFB={sponsor.linkFB}
                        linkJob={sponsor.linkJob}
                        mainSm={sponsor.mainSm}
                        subSm={sponsor.subSm}
                        xs={sponsor.xs}
                        description1={sponsor.description1}
                      />
                  )}
                  */}


                    <Row className="Sponsor">
                        <Col xs={12} sm={4} className="Simg">
                            <div className="Q_img">
                                <a href="https://www.qualtrics.com/careers/"><Image src={require('../img/partners/q.jpg')} /></a>
                            </div>
                        </Col>
                        <Col xs={12} sm={8} className="Sdescription">
                            <h3>Qualtrics</h3>
                            <p>
                                Jesteśmy dynamicznie rozwijającą się firmą typu "SaaS", założoną szesnaście lat temu w
                                Utah w USA. Bazując na danych płynących do nas od ponad miliona użytkowników
                                wykorzystaliśmy 15 lat rozwoju naszych produktów, aby uruchomić Qualtrics Experience
                                Management (XM) Platform &trade; - pierwszą na świecie i jedyną zintegrowaną platformę do
                                pomiaru i optymalizacji doświadczeń klientów, pracowników, marek i produktów oraz
                                Qualtrics iQ &trade; - kolekcji inteligentnych funkcji opartych na sztucznej inteligencji i uczeniu
                                maszynowym.
                            </p>
                            <p>
                                Dziś znajdziesz nas na siódmym miejscu w prestiżowym Forbes 2018 Cloud 100.
                                Współpracujemy z ponad 9.000 klientów a w ubiegłym roku otworzyliśmy nasze biuro w
                                Polsce. Kraków jest jednym z trzech globalnych biur inżynieryjnych.
                            </p>
                            <i className="fa fa-globe" aria-hidden="true"></i> <a href="https://www.qualtrics.com/careers/" className="partnerLink">www.qualtrics.com/careers</a><br/>
                            <i className="fab fa-facebook-square fa-lg"></i> <a href="https://www.facebook.com/QualtricsLife" className="partnerLink">/QualtricsLife</a><br/>
                            <i className="fab fa-instagram fa-lg"></i> <a href="https://www.instagram.com/qualtrics" className="partnerLink">/qualtrics</a><br/><br/>

                        </Col>

                    </Row>



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
