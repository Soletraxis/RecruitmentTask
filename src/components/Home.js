import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './Home.css'
import { HashLink as Link } from 'react-router-hash-link'
import ContentDiv from '../CustomComponents/ContentDiv'

class Home extends Component {
    render() {
        return (
          <ContentDiv>
            <Grid>
                <div className="dream">
                    <Row>
                        <Col xs={12} sm={9} smOffset={3} md={8} mdOffset={4}>
                            <h1>
                                If you can dream <strong>IT</strong><br/>
                                you can <strong>HACK IT</strong>
                            </h1>
                            <p>
                                <a href="https://www.newsite.best.krakow.pl/">
                                    Poznaj nas &gt;<br/>
                                </a>
                            </p>
                            <p>
                                <Link to="/hackathon#faq">
                                    FAQ &gt;<br/>
                                </Link>
                            </p>
                            <p>
                                <a href="http://www.bait.best.krakow.pl/2017/#/main/">
                                    Poprzednia edycja &gt;<br/>
                                </a>
                            </p>
                        </Col>
                    </Row>
                </div>
            </Grid>
          </ContentDiv>
        );
    }
}

export default Home;
