
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Navbar, NavbarBrand, NavbarHeader, Nav, NavItem, NavDropdown, MenuItem, Image} from 'react-bootstrap';

export default class AppNavBar extends Component {

  render() {
    return (<Navbar className="navbar-custom" fixedTop={true}>
      <Navbar.Header>
        <Navbar.Brand>
          <Image src="../../public/img/logo.png"></Image>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <NavItem eventKey={1} href="#">
          Link
        </NavItem>
        <NavItem eventKey={2} href="#">
          Link
      </NavItem>
        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1}>Action</MenuItem>
          <MenuItem eventKey={3.2}>Another action</MenuItem>
          <MenuItem eventKey={3.3}>Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.4}>Separated link</MenuItem>
        </NavDropdown>
      </Nav>
    </Navbar>);
  }
}