import React, {Component} from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom'


class CustomNavbar extends Component {
    render() {
        return (
            <Navbar default collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">BITEhack</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle>

                    </Navbar.Toggle>

                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
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
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default CustomNavbar;