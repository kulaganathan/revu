import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Task from './task/Task.jsx';
import AppNavBar from './common/AppNavBar.jsx'
import {Grid, Row, Col, Navbar, NavbarBrand, NavbarHeader, Nav,NavItem,NavDropdown,MenuItem,Image, Footer, PageHeader, Clearfix} from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <Grid fluid={true}>
      <AppNavBar/>
      <Clearfix></Clearfix>
      <PageHeader>
          The Q Arena 
      </PageHeader>
        <Row>
          <Col lg={12}  xs={3} md={6}><Task/></Col>
        </Row>
        <Row className="footer">Hello! tHis is footer...</Row>
      </Grid>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("approot"));
