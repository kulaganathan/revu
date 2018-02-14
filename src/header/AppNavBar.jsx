
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Navbar, NavbarBrand, NavbarHeader, Nav, NavItem, NavDropdown, MenuItem, Image} from 'react-bootstrap';

export default class AppNavBar extends Component {

  render() {
    return (
    <Navbar fixedTop={true} className="navbar-custom">
      <Navbar.Header>
        <Navbar.Brand>KS - RevU</Navbar.Brand>
      </Navbar.Header>
    </Navbar>);
  }
}
