import React, {Component} from 'react';
import "./Hackathon.css"
import { Carousel, Image } from 'react-bootstrap'

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
                                  <Col xs={12} sm={8} className="description1">
                                    <p>
                                        BITEhack to projekt organizowany przez Stowarzyszenie Studentów <strong>BEST AGH Kraków</strong>. Skierowany jest do pasjonatów szeroko pojętej automatyki, robotyki, programowania, jak również nowych technologii.
                                    </p>
                                      <p>
                                          Wydarzenie odbędzie się w dniach <strong>12-13 stycznia 2019r.</strong> w klubie Studio - jednym z najważniejszych ośrodków kulturowych Krakowa znajdującym się w samym sercu Miasteczka Studenckiego AGH.
                                      </p>
                                      <p>
                                         Tegoroczna edycja hackathonu będzie składać się z dwóch równolegle trwających konkurencji.
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
                                    <Col xs={12} sm={8} className="description2">
                                        <p>
                                            Pierwszą konkurencją jest maraton programowania. W ramach konkursu ok. <strong>80 uczestników</strong> zainteresowanych sektorem IT, współpracujących w maksymalnie czteroosobowych zespołach, będzie pracować przez 24h w wybranej technologii nad postawionym przez nas problemem. Po upłynięciu czasu przeznaczonego na wykonanie zadania odbędą się krótkie prezentacje projektu.
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
                                    <Col xs={12} sm={8} className="description3">
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
