import React, {Component} from 'react';
import "./Hackathon.css"
import { Carousel, Panel, PanelGroup } from 'react-bootstrap'
/*import {} from 'react-panel';*/

import { Grid, Row, Col} from 'react-bootstrap';
import ContentDiv from '../CustomComponents/ContentDiv'


class Hackathon extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleSelect = this.handleSelect.bind(this);

        this.state = {
            activeKey: '1'
        };
    }

    handleSelect(activeKey) {
        this.setState({ activeKey });
    }

    render() {
        return (
            <ContentDiv className="hackathon" >
                <div className="slide">
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
                <div className='faq-container'>
                    <div className="faq">
                        <a id="faq"></a>
                        <h3>Frequently Asked Questions</h3>
                        <PanelGroup
                            accordion
                            id="accordion-controlled-example"
                            activeKey={this.state.activeKey}
                            onSelect={this.handleSelect}
                        >
                            <Panel eventKey="1">
                                <Panel.Heading onClick={() => this.handleSelect('1')}>
                                    <Panel.Title>
                                        Kto może wziąć udział?
                                    </Panel.Title>
                                </Panel.Heading>
                                <Panel.Body collapsible>
                                    Warunek jest jeden - musisz mieć status studenta polskiej uczelni publicznej. Nie ma różnicy, czy jesteś doświadczonym programistą, czy dopiero stawiasz pierwsze kroki - warto spróbować swoich sił.
                                </Panel.Body>
                            </Panel>
                            <Panel eventKey="2">
                                <Panel.Heading onClick={() => this.handleSelect('2')}>
                                    <Panel.Title>Czy udział w Hackathonie jest płatny?</Panel.Title>
                                </Panel.Heading>
                                <Panel.Body collapsible>Udział jest całkowicie bezpłatny.</Panel.Body>
                            </Panel>
                            <Panel eventKey="3">
                                <Panel.Heading onClick={() => this.handleSelect('3')}>
                                    <Panel.Title>
                                        W jaki sposób mogę się zarejestrować?
                                    </Panel.Title>
                                </Panel.Heading>
                                <Panel.Body collapsible>
                                    Za pomocą <a href="\register"> tej strony </a>. Rejestracji dokonuje kapitan w imieniu całej drużyny, podając maile członków drużyny. Następnie wyślemy formularz do każdego z potwierdzeniem uczestnictwa w hackathonie. To takie proste!                                </Panel.Body>
                            </Panel>
                            <Panel eventKey="4">
                                <Panel.Heading onClick={() => this.handleSelect('4')}>
                                    <Panel.Title>Jak liczne mogą być drużyny?</Panel.Title>
                                </Panel.Heading>
                                <Panel.Body collapsible>
                                    Jak nazwa wskazuje nie może być to pojedyncza osoba. Dopuszczamy zespoły 2-4 osobowe.
                                </Panel.Body>
                            </Panel>
                            <Panel eventKey="5">
                                <Panel.Heading onClick={() => this.handleSelect('5')}>
                                    <Panel.Title>
                                        Czy będą nagrody?
                                    </Panel.Title>
                                </Panel.Heading>
                                <Panel.Body collapsible>
                                    Oczywiście że tak! Nagrodzimy najlepsze projekty, które Jury wybierze na podstawie Waszych prezentacji.
                                </Panel.Body>
                            </Panel>
                            <Panel eventKey="6">
                                <Panel.Heading onClick={() => this.handleSelect('6')}>
                                    <Panel.Title>
                                        Co powinienem ze sobą przynieść na hackathon klasyczny?
                                    </Panel.Title>
                                </Panel.Heading>
                                <Panel.Body collapsible>
                                    Weź swój laptop, smartfon, tablet, zasilacze, kable i cokolwiek co będzie Ci potrzebne w pracy nad projektem. Nie narzucamy żadnych ograniczeń, co do platformy, czy języka programowania. Pracuj tak, jak Ci jest najwygodniej
                                </Panel.Body>
                            </Panel>
                            <Panel eventKey="7">
                                <Panel.Heading onClick={() => this.handleSelect('7')}>
                                    <Panel.Title>
                                        A co przynieść na hackathon robotyczny?
                                    </Panel.Title>
                                </Panel.Heading>
                                <Panel.Body collapsible>
                                    Weź ze sobą swój laptop z zainstalowanym oprogramowaniem Arduino  <a href="https://www.arduino.cc/en/Main/Software">&gt;link&lt;</a> i wszystkie części, które uważasz za pomocne, a my ich nie zapewniamy. Pamiętaj by swoją listę części skonsultować wcześniej z koordynatorem ds. hackathonu robotycznego: albert.luczak@best.krakow.pl
                                </Panel.Body>
                            </Panel>
                            <Panel eventKey="8">
                                <Panel.Heading onClick={() => this.handleSelect('8')}>
                                    <Panel.Title>
                                        Jakie części będą w takim razie na miejscu?
                                    </Panel.Title>
                                </Panel.Heading>
                                <Panel.Body collapsible>
                                    Będą na was czekały …. …. … . Będą też dostępne stoły z lutownicą oraz drukarka 3D.
                                </Panel.Body>
                            </Panel>
                            <Panel eventKey="9">
                                <Panel.Heading onClick={() => this.handleSelect('9')}>
                                    <Panel.Title>
                                        Czy będzie jedzenie na hackathonie?
                                    </Panel.Title>
                                </Panel.Heading>
                                <Panel.Body collapsible>
                                    No to jasne! Zadbamy o to, by głód nie przeszkadzał wam w czasie pracy. Przewidujemy zarówno zimne jak i ciepłe dania.
                                </Panel.Body>
                            </Panel>
                            <Panel eventKey="10">
                                <Panel.Heading onClick={() => this.handleSelect('10')}>
                                    <Panel.Title>
                                        Czy musimy mieć już pomysł co robić?
                                    </Panel.Title>
                                </Panel.Heading>
                                <Panel.Body collapsible>
                                    Najlepsze idee rodzą się najpóźniej. Jeśli jeszcze nie macie żadnej wizji, możecie spróbować określić cel w trakcie hackathonu i przedyskutować go z mentorami. Ale pamiętajcie - 24h to wcale nie tak dużo czasu!
                                </Panel.Body>
                            </Panel>
                            <Panel eventKey="11">
                                <Panel.Heading onClick={() => this.handleSelect('11')}>
                                    <Panel.Title>
                                        Co jeśli nie dam rady siedzieć przed komputerem przez 24h?
                                    </Panel.Title>
                                </Panel.Heading>
                                <Panel.Body collapsible>
                                    Spokojnie, hackathon wcale nie oznacza konieczności pracy nad projektem non-stop przez 24h. Możecie dyskutować z innymi drużynami przy kawie. Do waszej dyspozycji będą też planszówki, konsole i pufki na których będziecie mogli odpocząć!
                                </Panel.Body>
                            </Panel>
                            <Panel eventKey="12">
                            <Panel.Heading onClick={() => this.handleSelect('12')}>
                                <Panel.Title>
                                    Czy mogę wrócić do domu na noc?
                                </Panel.Title>
                            </Panel.Heading>
                            <Panel.Body collapsible>
                                Pewnie że tak, ale możesz też zdrzemnąć się na leżaczku w strefie snu. Na pewno zaoszczędzisz w ten sposób mnóstwo czasu! A może wpadniesz na genialny pomysł zaraz po przebudzeniu i odrazu wskoczysz w wir pracy?
                            </Panel.Body>
                            </Panel>
                            <Panel eventKey="13">
                                <Panel.Heading onClick={() => this.handleSelect('13')}>
                                    <Panel.Title>
                                        Co zrobić, jeśli nie ma tutaj odpowiedzi na moje pytanie?
                                    </Panel.Title>
                                </Panel.Heading>
                                <Panel.Body collapsible>
                                    Skontaktuj się z nami! Napisz mail na adres: dominik.kolodziej@best.krakow.pl
                                </Panel.Body>
                            </Panel>

                        </PanelGroup>
                    </div>
                </div>
            </ContentDiv>
        );
    }
}

export default Hackathon;
