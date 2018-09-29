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
                            <Image src={require('../img/michal.jpg')} circle />
                        </Col>
                        <Col className="CT_description" xs={8}  md={4} xsOffset={2} mdOffset={0}>
                            <strong>Koordynator Projektu</strong><br/>
                                Michał Błasiak<br/>
                                <a href="mailto:michal.blasiak@best.krakow.pl">michal.blasiak@best.krakow.pl</a>
                        </Col>

                        <Col className="CT_image" xs={8}  md={2} xsOffset={2} mdOffset={0}>
                            <Image src={require('../img/agata.jpg')} circle />
                        </Col>
                        <Col className="CT_description" xs={8}  md={4} xsOffset={2} mdOffset={0}>
                           <strong>Koordynator ds. kontaktu z firmami</strong> <br/>
                                Agata Redlich<br/>
                                <a href="mailto:agata.redlich@best.krakow.pl">agata.redlich@best.krakow.pl</a>
                        </Col>

                        <Col className="CT_image" xs={8}  md={2} xsOffset={2} mdOffset={0}>
                            <Image src={require('../img/renata.jpg')} circle />
                        </Col>
                        <Col className="CT_description" xs={8}  md={4} xsOffset={2} mdOffset={0}>
                            <strong>Koordynator ds. designu i promocji</strong> <br/>
                            Renata Radzewicz<br/>
                            <a href="mailto:renata.radzewicz@best.krakow.pl">renata.radzewicz@best.krakow.pl</a>
                        </Col>

                        <Col className="CT_image" xs={8}  md={2} xsOffset={2} mdOffset={0}>
                            <Image src={require('../img/katarzyna.jpg')} circle />
                        </Col>
                        <Col className="CT_description" xs={8}  md={4} xsOffset={2} mdOffset={0}>
                            <strong>Koordynator ds. logistyki</strong> <br/>
                            Katarzyna Radomska<br/>
                            <a href="mailto:katarzyna.radomska@best.krakow.pl">katarzyna.radoska@best.krakow.pl</a>
                        </Col>

                        <Col className="CT_image" xs={8}  md={2} xsOffset={2} mdOffset={0}>
                            <Image src={require('../img/przemyslaw.jpg')} circle />
                        </Col>
                        <Col className="CT_description" xs={8}  md={4} xsOffset={2} mdOffset={0}>
                            <strong>Koordynator ds. hackathonu klasycznego</strong> <br/>
                            Przemysław Przebieglec<br/>
                            <a href="mailto:przemyslaw.przebieglec@best.krakow.pl">przemyslaw.przebielec@best.krakow.pl</a>
                        </Col>

                        <Col className="CT_image" xs={8}  md={2} xsOffset={2} mdOffset={0}>
                            <Image src={require('../img/albert.jpg')} circle />
                        </Col>
                        <Col className="CT_description" xs={8}  md={4} xsOffset={2} mdOffset={0}>
                            <strong>Koordynator ds. hackathonu robotycznego</strong> <br/>
                            Albert Łuczak<br/>
                            <a href="mailto:albert.luczak@best.krakow.pl">albert.luczak@best.krakow.pl</a>
                        </Col>

                        <Col className="CT_image" xs={8}  md={2} xsOffset={2} mdOffset={3}>
                            <Image src={require('../img/dominik.jpg')} circle />
                        </Col>
                        <Col className="CT_description" xs={8}  md={4} xsOffset={2} mdOffset={0}>
                            <strong>Koordynator ds. zasobów ludzkich</strong> <br/>
                            Dominik Kołodziej<br/>
                            <a href="mailto:dominik.kolodziej@best.krakow.pl">dominik.kolodziej@best.krakow.pl</a>
                        </Col>
                    </Row>

                </Grid>
            </div>
        );
    }
}

export default Organizers;