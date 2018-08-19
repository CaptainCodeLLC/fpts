import React, { Component } from 'react'
import { Container, Col, Row, Input, Form, Button } from 'reactstrap';
import axios from 'axios';
import iPhone from './iPhoneX_Mockup_FPTS.png'
import './contact.css';
export default class Contact extends Component {

  state = {
    firstName: '',
    lastName: '',
    emailAddress: '',
    phoneNumber: '',
    companyName: '',
    message: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();

    axios.post('/users', this.state)
      .then(res => console.log('axios response', res))
      .catch(err => console.log(err))

    console.log(this.state);
    this.setState({
      firstName: '',
      lastName: '',
      emailAddress: '',
      phoneNumber: '',
      companyName: '',
      message: ''
    })
  }

  render() {
    return (
      <Container className = "contact-form">
        <Row>
          <Col className = "contact-img" sm = "12" md = {{size:3}} lg='4'>
            <img style = {{width:'100%'}} alt = "" src={iPhone} />
          </Col>
          <Col sm = {{size: 12, offset:0}} md ={{ size:11, offset:1}} lg={{size:'5', offset:'2'}}>
            <h1>Contact Us</h1>
            <hr />
            <Form>
              <Row>
                <Col>
                  <Input
                    name="firstName"
                    placeholder="First Name"
                    value={this.state.firstName}
                    onChange={e => this.handleChange(e)}
                  />
                  <br/>
                </Col>
                <Col>
                  <Input
                    name="lastName"
                    placeholder="Last Name"
                    value={this.state.lastName}
                    onChange={e => this.handleChange(e)}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Input
                    type='email'
                    name="emailAddress"
                    placeholder="E-Mail Address"
                    value={this.state.emailAddress}
                    onChange={e => this.handleChange(e)}
                  />
                  <br/>
                </Col>

              </Row>
              <Input
                name="phoneNumber"
                placeholder="Phone Number"
                value={this.state.phoneNumber}
                onChange={e => this.handleChange(e)}
              />
              <br/>
              <Input
                name="companyName"
                placeholder="Company Name"
                value={this.state.companyName}
                onChange={e => this.handleChange(e)}
              />
              <br/>
              <Input
                type="textarea"
                style={{ height: 180 }}
                name="message"
                placeholder="Talk to us"
                value={this.state.message}
                onChange={e => this.handleChange(e)}
              />

              <Col style = {{textAlign:'center'}}lg="3" className = "contact-button-container">
                <Button className = "contact-button" color="success" onClick={(e) => this.handleSubmit(e)}> Submit </Button>
              </Col>

            </Form>
          </Col>
        </Row>
      </Container>
    )
  }

}
