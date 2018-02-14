import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import AppNavBar from './header/AppNavBar.jsx'
import {Grid, Row, Col} from 'react-bootstrap';
import LeftContent from './content/leftcontent.jsx';
import RightContent from './content/rightcontent.jsx';
import CenterContent from './content/centercontent.jsx';
import Footer from './footer/footer.jsx';

class App extends Component {
  render() {
    return (
      <Grid>
        <Row className="header"><Col xs={12} md={12}><AppNavBar/></Col></Row>
        <Row>
            <Col xs={4} md={4}><LeftContent/></Col>
            <Col xs={4} md={4}><CenterContent/></Col>
            <Col xs={4} md={4}><RightContent/></Col>
        </Row>
        <Row>
          <Col xs={12} md={12}><Footer/></Col>
        </Row>
      </Grid>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("approot"));
