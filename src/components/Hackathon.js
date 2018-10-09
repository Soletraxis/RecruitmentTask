import React, {Component} from 'react';
import "./Hackathon.css"
import { Carousel } from 'react-bootstrap'

import { Grid, Row, Col} from 'react-bootstrap';


class Hackathon extends Component {
    render() {
        return (
            <div className="hackathon">
                <Carousel
                  bsClass='carousel'
                >
                    <Carousel.Item>
                      <div className='hackathon_container'>
                          <Grid>
                              <Row>
                                  <Col xs={12} sm={4} className="Title">
                                      <h3>O projekcie</h3>
                                  </Col>
                                  <Col xs={12} sm={8}>
                                    <p>
                                        BITEhack to projekt organizowany przez Stowarzyszenie Studentów <strong>BEST AGH Kraków</strong>. Skierowany jest do pasjonatów szeroko pojętej automatyki, robotyki, programowania, jak również nowych technologii.
                                    </p>
                                      <p>
                                          Wydarzenie odbędzie się w dniach <strong>12-13 stycznia 2019r.</strong> w klubie Studio - jednym z najważniejszych ośrodków kulturowych Krakowa znajdującym się w samym sercu Miasteczka Studenckiego AGH.
                                      </p>
                                      <p>
                                          Z roku na rok staramy się  sprostać oczekiwaniom zainteresowanych studentów oraz naszych partnerów podnosząc atrakcyjność projektu. W związku z tym tegoroczna edycja hackathonu będzie składać się z dwóch równolegle trwających konkurencji.
                                      </p>
                                  </Col>
                              </Row>
                          </Grid>
                      </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='hackathon_container'>
                            <Grid>
                                <Row>
                                    <Col xs={12} sm={4} className="Title">
                                        <h3>Konkurencja klasyczna</h3>
                                    </Col>
                                    <Col xs={12} sm={8}>
                                        <p>
                                            Pierwszą konkurencją jest maraton programowania. W ramach konkursu ok. <strong>100 uczestników</strong> zainteresowanych sektorem IT, współpracujących w maksymalnie czteroosobowych zespołach, będzie pracować przez 24h w wybranej technologii nad postawionym przez nas problemem. Po upłynięciu czasu przeznaczonego na wykonanie zadania odbędą się krótkie prezentacje projektu                                        </p>
                                        <p>
                                            Wydarzenie odbędzie się w dniach <strong>12-13 stycznia 2019r.</strong> w klubie Studio - jednym z najważniejszych ośrodków kulturowych Krakowa znajdującym się w samym sercu Miasteczka Studenckiego AGH.
                                        </p>
                                    </Col>
                                </Row>
                            </Grid>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='hackathon_container'>
                            <Grid>
                                <Row>
                                    <Col xs={12} sm={4} className="Title">
                                        <h3>Konkurencja robotyczna</h3>
                                    </Col>
                                    <Col xs={12} sm={8}>
                                        <p>
                                            Najnowsza konkurencja projektu zastępuje organizowany w ubiegłych latach Turniej Robotów. Została stworzona z myślą o pasjonatach automatyki i robotyki, którzy nie mają wielu okazji do uczestnictwa w tego typu wydarzeniach. Zaproponowania przez nas forma cieszy się dużym zainteresowaniem, co potwierdzają wyniki ankiety przeprowadzonej wśród studentów.                                        </p>
                                        <p>
                                            W konkurencji robotycznej uczestnicy będą mieli za zadanie zaprojektować i zbudować od podstaw gotowy projekt, zarówno od strony softwarowej jak i hardwarowej przy użyciu dostarczonych przez organizatorów, a także przygotowanych przez uczestników komponentów. Na zrealizowanie zadania zespoły będą miały 24 godziny.
                                        </p>
                                    </Col>
                                </Row>
                            </Grid>
                        </div>
                    </Carousel.Item>

                  )
                </Carousel>
            </div>
        );
    }
}

export default Hackathon;
