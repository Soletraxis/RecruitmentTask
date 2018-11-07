import React, {Component} from 'react';
import { Navbar, Nav, NavItem, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import './CustomNavbar.css'


class CustomNavbar extends Component {
    render() {
        return (
            <Navbar default transparent>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">
                            <Image src={require('../img/bitehack_logo_fluo.png')}/>
                        </Link>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem eventKey={1} componentClass={Link} to="/hackathon" href="/hackathon">
                        Hackathon
                     </NavItem>
                    <NavItem eventKey={2} componentClass={Link} to="/partners" href="/partner">
                        Partnerzy
                    </NavItem>
                    <NavItem eventKey={3} componentClass={Link} to="/organizers" href="/organizers">
                        Organizatorzy
                    </NavItem>
                    <NavItem eventKey={4} componentClass={Link} to="/register" href="/register" id="zapisy">
                        Zapisz się!
                    </NavItem>
                </Nav>

            </Navbar>
        );
    }
}

export default CustomNavbar;