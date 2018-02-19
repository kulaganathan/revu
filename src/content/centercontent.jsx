
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Form, FormGroup, FormControl, ControlLabel, Col, Button} from 'react-bootstrap';

export default class CenterContent extends Component {
  
  constructor(){
    super();
    this.state={"buttonName": "Submit"};
    this.handleClick=this.handleClick.bind(this);
  }

  handleClick(e){
    console.log("Clicked !!");
    e.preventDefault();
    this.setState({ buttonName: "Clicked"});
  }

  render() {
    return (
      <Form horizontal onSubmit={this.handleClick}>
        <FormGroup controlId="taskName">
          <Col componentClass={ControlLabel} xs={4} md={2}>
            Task Name:
          </Col>
          <Col xs={8} md={4}>
            <FormControl id="taskName" type="text"></FormControl>
          </Col>
        </FormGroup>
        <FormGroup controlId="timeFrom">
          <Col componentClass={ControlLabel} xs={4} md={2}>
            From:
          </Col>
          <Col xs={8} md={4}>
            <FormControl id="timeFrom" type="text"></FormControl>
          </Col>
          <Col componentClass={ControlLabel} xs={4} md={2}>
            To:
          </Col>
          <Col xs={8} md={4}>
            <FormControl id="timeFrom" type="text"></FormControl>
          </Col>
        </FormGroup>
        <FormGroup controlId="taskName">
          <Col componentClass={ControlLabel} xs={4} md={2}>
          </Col>
          <Col xs={8} md={4}>
          <Button type="submit" >{this.state.buttonName}</Button>
          </Col>
        </FormGroup>
      </Form>
     );
  }
}
