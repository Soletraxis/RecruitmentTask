import React, {Component} from 'react';
import { Navbar, Nav, NavItem, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import './CustomNavbar.css'


class CustomNavbar extends Component {
    render() {
        return (
            <Navbar default >
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">
                            <Image src={require('../img/bitehack_logo_fluo.png')}/>
                        </Link>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem eventKey={1} componentClass={Link} to="/" href="/">
                        Home
                     </NavItem>
                    <NavItem eventKey={2} componentClass={Link} to="/organizers" href="/organizers">
                        Organizers
                    </NavItem>
                    <NavItem eventKey={3} componentClass={Link} to="/partners" href="/partners">
                        Partners
                    </NavItem>
                </Nav>

            </Navbar>
        );
    }
}

export default CustomNavbar;