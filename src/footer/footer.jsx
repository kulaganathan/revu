
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Navbar,Header,Brand,Image} from 'react-bootstrap';

export default class Footer extends Component {

  render() {
    return (
    <Navbar fixedBottom className="navbar-custom">
      <Navbar.Header>
        <Navbar.Brand>KS - RevU Footer</Navbar.Brand>
      </Navbar.Header>
    </Navbar>);
  }
}
