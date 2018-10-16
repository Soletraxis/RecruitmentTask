import React, {Component} from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import "./Organizers.css";

class Organizers extends Component {
    render() {
        return (
            <div className={Organizers}>
                <Grid>
                    <Row className="aboutBEST">
                        <Col xs={12} sm={6}>
                            <Image src={require('../img/best-logo-white.svg')} className="logo"/>
                        </Col>
                        <Col xs={12} sm={6}>
                            <p>
                                BEST AGH Kraków to grupa lokalna międzynarodowej organizacji BEST (Board of European Students of Technology), której nadrzędnym celem jest rozwój studentów.  <br/> <br/>
                                Podobnie jak odbiorcy naszych projektów my również jesteśmy studentami, dlatego znamy i rozumiemy potrzeby młodego pokolenia. Poprzez realizowane przez nas projekty uzupełniamy ich wiedzę wyniesioną z uczelni o doświadczenie praktyczne i umiejętności miękkie oraz ułatwiamy rozpoczęcie własnej kariery zawodowej.
                            </p>
                        </Col>
                    </Row>
                    <Row className="coreTeam">

                        <Col className="CT_image" xs={8}  md={2} xsOffset={2} mdOffset={0}>
                            <Image src={require('../img/ct/michal.jpg')} circle />
                        </Col>
                        <Col className="CT_description" xs={8}  md={4} xsOffset={2} mdOffset={0}>
                            <strong>Koordynator projektu</strong><br/>
                            <i className="far fa-user"></i> Michał Błasiak<br/>
                            <i className="far fa-envelope"></i> <a href="mailto:michal.blasiak@best.krakow.pl">michal.blasiak@best.krakow.pl</a>
                        </Col>

                        <Col className="CT_image" xs={8}  md={2} xsOffset={2} mdOffset={0}>
                            <Image src={require('../img/ct/agata.jpg')} circle />
                        </Col>
                        <Col className="CT_description" xs={8}  md={4} xsOffset={2} mdOffset={0}>
                           <strong>Koordynator ds. kontaktu z firmami</strong> <br/>
                            <i className="far fa-user"></i> Agata Redlich<br/>
                            <i className="far fa-envelope"></i> <a href="mailto:agata.redlich@best.krakow.pl">agata.redlich@best.krakow.pl</a>
                        </Col>

                        <Col className="CT_image" xs={8}  md={2} xsOffset={2} mdOffset={0}>
                            <Image src={require('../img/ct/renata.jpg')} circle />
                        </Col>
                        <Col className="CT_description" xs={8}  md={4} xsOffset={2} mdOffset={0}>
                            <strong>Koordynator ds. designu i promocji</strong> <br/>
                            <i className="far fa-user"></i> Renata Radzewicz<br/>
                            <i className="far fa-envelope"></i> <a href="mailto:renata.radzewicz@best.krakow.pl">renata.radzewicz@best.krakow.pl</a>
                        </Col>

                        <Col className="CT_image" xs={8}  md={2} xsOffset={2} mdOffset={0}>
                            <Image src={require('../img/ct/katarzyna.jpg')} circle />
                        </Col>
                        <Col className="CT_description" xs={8}  md={4} xsOffset={2} mdOffset={0}>
                            <strong>Koordynator ds. logistyki</strong> <br/>
                            <i className="far fa-user"></i> Katarzyna Radomska<br/>
                            <i className="far fa-envelope"></i> <a href="mailto:katarzyna.radomska@best.krakow.pl">katarzyna.radomska@best.krakow.pl</a>
                        </Col>

                        <Col className="CT_image" xs={8}  md={2} xsOffset={2} mdOffset={0}>
                            <Image src={require('../img/ct/przemyslaw.jpg')} circle />
                        </Col>
                        <Col className="CT_description" xs={8}  md={4} xsOffset={2} mdOffset={0}>
                            <strong>Koordynator ds. hackathonu klasycznego</strong> <br/>
                            <i className="far fa-user"></i> Przemysław Przebieglec<br/>
                            <i className="far fa-envelope"></i> <a href="mailto:przemyslaw.przebieglec@best.krakow.pl">przemyslaw.przebielec@best.krakow.pl</a>
                        </Col>

                        <Col className="CT_image" xs={8}  md={2} xsOffset={2} mdOffset={0}>
                            <Image src={require('../img/ct/albert.jpg')} circle />
                        </Col>
                        <Col className="CT_description" xs={8}  md={4} xsOffset={2} mdOffset={0}>
                            <strong>Koordynator ds. hackathonu robotycznego</strong> <br/>
                            <i className="far fa-user"></i> Albert Łuczak<br/>
                            <i className="far fa-envelope"></i> <a href="mailto:albert.luczak@best.krakow.pl">albert.luczak@best.krakow.pl</a>
                        </Col>

                        <Col className="CT_image" xs={8}  md={2} xsOffset={2} mdOffset={3}>
                            <Image src={require('../img/ct/dominik.jpg')} circle />
                        </Col>
                        <Col className="CT_description" xs={8}  md={4} xsOffset={2} mdOffset={0}>
                            <strong>Koordynator ds. zasobów ludzkich</strong> <br/>
                            <i className="far fa-user"></i> Dominik Kołodziej<br/>
                            <i className="far fa-envelope"></i> <a href="mailto:dominik.kolodziej@best.krakow.pl">dominik.kolodziej@best.krakow.pl</a>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Organizers;