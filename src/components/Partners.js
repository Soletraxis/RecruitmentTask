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
                        <div className="glowny">
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
                        </div>
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

                    <Row className="Sponsor">
                        <Col xs={12} sm={4} className="Simg">
                            <div className="Nok_img">
                                <a href="http://nokiakrakow.pl/"><Image src={require('../img/partners/nokia.png')} /></a>
                            </div>
                        </Col>
                        <Col xs={12} sm={8} className="Sdescription">
                            <h3>Nokia</h3>
                            <p>
                                Firma Nokia tworzy technologie łączące świat. Wspierana przez badania i innowacje laboratoriów Nokia Bell Labs służy dostawcom usług telekomunikacyjnych, administracji, dużym przedsiębiorstwom oraz konsumentom najbardziej kompletnym, całościowym portfolio produktów, usług i licencji w branży telekomunikacyjnej.
                                Od infrastruktury umożliwiającej działanie sieci 5G oraz Internetu rzeczy, do rozwijających się aplikacji dla wirtualnej rzeczywistości i cyfrowego zdrowia, Nokia kształtuje przyszłość technologii, które pozwolą przekształcić ludzkie doświadczenia.

                            </p>

                            <i className="fa fa-globe" aria-hidden="true"></i> <a href="http://nokiakrakow.pl/" className="partnerLink">nokiakrakow.pl</a><br/>
                            <i className="fab fa-facebook-square fa-lg"></i> <a href="https://www.facebook.com/rdkrakow/" className="partnerLink">/rdkrakow/</a><br/>

                        </Col>

                    </Row>

                    <Row className="Sponsor">
                        <Col xs={12} sm={4} className="Simg">
                            <div className="Er_img">
                                <a href="https://www.ericsson.com/pl/pl"><Image src={require('../img/partners/ericsson.PNG')} /></a>
                            </div>
                        </Col>
                        <Col xs={12} sm={8} className="Sdescription">
                            <h3>Ericsson</h3>
                            <p>
                                Ericsson to firma o zasięgu globalnym, założona w 1876 roku w Sztokholmie przez Larsa Magnusa Ericssona. Ericsson jest dostawcą usług i serwisów dla operatorów telekomunikacyjnych. Firma działa w 175 krajach. W Polsce pierwsza centrala telefoniczna Ericsson została uruchomiona w Warszawie w 1904 roku. W skład produktów firmy wchodzą: infrastruktura sieci stałych i mobilnych, internet szerokopasmowy oraz rozwiązania multimedialne. Ericsson jest aktywnym promotorem technologii 5G w Polsce oraz członkiem Porozumienia na rzecz Strategii „5G dla Polski”.
                            </p>
                            <p>
                                Ericsson posiada w Polsce dwa centra badawczo-rozwojowe w Łodzi i Krakowie, zatrudnia blisko 2000 inżynierów odpowiedzialnych za rozwój kolejnych produktów teleinformatycznych Ericsson wykorzystywanych na całym świecie
                            </p>
                            <p>
                                We współczesnym świecie, technologia napędza biznes i zmiany w społeczeństwie. Pracownicy Ericsson to inicjatorzy zmian, łączący inwencję, nieszablonowe myślenie i wiedzę o nowoczesnych technologiach, by kształtować swoje otoczenie. To oni upowszechniają technologię łączności w przemyśle, społeczeństwie i lokalnych społecznościach.                            </p>
                            <p>
                                Naszą wizją jest Networked Society – zbudowanie społeczeństwa operującego w sieci, w którym każdy z nas dzięki technologii ma możliwość w pełni wykorzystać swój potencjał. By wprowadzić tę wizję w życie, potrzebujemy odpowiednich ludzi – takich jak Ty.
                            </p>
                            <i className="fa fa-globe" aria-hidden="true"></i> <a href="https://www.ericsson.com/pl/pl" className="partnerLink">www.ericsson.com/pl/pl</a><br/>

                        </Col>

                    </Row>
                    <Row className="Sponsor">
                        <Col xs={12} sm={4} className="Simg">
                            <div className="Ant_img">
                                <a href="https://antsolutions.eu/"><Image src={require('../img/partners/ant.png')} /></a>
                            </div>
                        </Col>
                        <Col xs={12} sm={8} className="Sdescription">
                            <h3>Ant</h3>
                            <p>
                                Jesteśmy doświadczonymi inżynierami, firmą technologiczną, dostarczającą dedykowane systemy bazując na własnej platformie programistycznej dla największych zakładów produkcyjnych na świecie, ponad 350 projektów w 30 krajach. Tworzymy zaawansowane rozwiązania z dziedziny automatyki i systemów komputerowych, zgodnie z ideą Industry 4.0.
                              </p>
                            <p>
                                W ANT podchodzimy kompleksowo do realizacji projektów. Wspólnie z Klientem opracowujemy koncepcję i strategię wdrożenia, dostarczamy automatykę przemysłową oraz sprzęt, tworzymy i wdrażamy dedykowane oprogramowanie oraz zapewniamy 24/7 support. Wdrażane systemy tworzone są w oparciu o autorską platformę zrealizowaną od podstaw i stale rozwijaną przez nasz zespół.
                            </p>
                            <p>
                                Jesteśmy młodym, aktywnym i szybko rozwijającym się zespołem inżynierów realizującym dedykowane systemy dla międzynarodowych firm produkcyjnych. Jeśli lubisz wyzwania i chcesz wspólnie z nami tworzyć i rozwijać autorskie oprogramowanie implementowane na całym świecie – dołącz do naszego zespołu.                            </p>

                            <i className="fa fa-globe" aria-hidden="true"></i> <a href="https://antsolutions.eu/" className="partnerLink">antsolutions.eu/</a><br/>
                        </Col>

                    </Row>


                    <Row className="Sponsor">
                        <Col xs={12} sm={4} className="Simg">
                            <div className="Ele_img">
                                <a href="http://www.elettric80.com"><Image src={require('../img/partners/elettric80.jpg')} /></a>
                            </div>
                        </Col>
                        <Col xs={12} sm={8} className="Sdescription">
                            <h3>Elettric 80</h3>
                            <p>
                                Elettric80 jest światowym liderem w dziedzinie inteligentnych w pełni automatycznych systemów logistycznych. Główna siedziba firmy znajduje się we Włoszech. W Polsce ulokowany jest prężnie rozwijający się oddział inżynieryjny z siedzibą w Krakowie. Firma ma swoje oddziały również w USA, Wielkiej Brytanii, Brazylii, Szwecji, Francji, Australii oraz Dubaju. Elettric80 znany jest na świecie głownie z bezobsługowych wózków widłowych sterowanych laserowo LGV, wysp paletyzujących oraz inteligentnych systemów zarządzania magazynem.
                            </p>

                            <i className="fa fa-globe" aria-hidden="true"></i> <a href="http://www.elettric80.com" className="partnerLink"> www.elettric80.com</a><br/>

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
