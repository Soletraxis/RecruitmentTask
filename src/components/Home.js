import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './Home.css'

class Home extends Component {
    render() {
        return (
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
                                 Poznaj nas >
                             </a>
                            </p>
                        </Col>
                    </Row>
                </div>
            </Grid>
        );
    }
}

export default Home;