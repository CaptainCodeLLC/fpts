import React, { Component } from 'react'
import { Container, Col, Row, Input, Button } from 'reactstrap';
import {AvForm, AvField} from 'availity-reactstrap-validation';
import axios from 'axios';
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
 
      axios.post('/api/message', this.state)
        .then(res => console.log('axios response', res))
        .catch(err => console.log(err))

      console.log(this.state);
      this.setState({
        firstName: '',
        lastName: '',
        emailAddress: '',
        phoneNumber: '',
        companyName: '',
        message: '',
        subjectLine:''
      })
    }
  
  

  render() {
    return (
      <Container className="contact-form">
        <Row>
          <Col className="contact-img" sm="10" md={{ size: 3 }} lg='4'>
            <img style={{ width: '100%' }} alt="" src="https://s3.amazonaws.com/fpts-images/iPhoneX_Mockup_FPTS.png" />
          </Col>
          <Col sm={{ size: 12, offset: 0 }} md={{ size: 11, offset: 1 }} lg={{ size: '5', offset: '2' }}>
            <h1>Contact Us</h1>
            <hr />
            <AvForm action = "https://formspree.io/eddy@captaincode.cc"  method="POST" style = {{margin:0}}>
              <Row>
                <Col>
                  <AvField
                    name="First Name"
                    placeholder="First Name"
                    value={this.state.firstName}
                    onChange={e => this.handleChange(e)}
                  />
                  <br />
                </Col>
                <Col>
                  <AvField
                    name="Last Name"
                    placeholder="Last Name"
                    value={this.state.lastName}
                    onChange={e => this.handleChange(e)}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                <AvField
                  name="Email" 
                  placeholder="Email Address"
                  onChange={e => this.handleChange(e)}
                  value={this.state.emailAddress}
                  type="text" 
                  validate={{email: true}} 
                  />
                  <br />
                </Col>
              </Row>
              <Row>
                <Col>
                  <AvField
                    name="Company Name"
                    placeholder="Company Name"
                    value={this.state.companyName}
                    onChange={e => this.handleChange(e)}
                  />
                  </Col>
                  <Col>
                  <AvField
                    name="Telephone" 
                    placeholder="Phone Number" 
                    type="text"
                    validate={{tel: true}}
                    value={this.state.phoneNumber}
                    onChange={e => this.handleChange(e)}
                  />
                </Col>
             </Row>
              <br />
              <Input
                name="Subject Line"
                placeholder="Subject Line"
                value={this.state.subjectLine}
                onChange={e => this.handleChange(e)}
              />
              <br/>
              <Input
                type="Message"
                style={{ height: 180 }}
                name="message"
                placeholder="Talk to us"
                value={this.state.message}
                onChange={e => this.handleChange(e)}
              />

              <Col style={{ textAlign: 'center' }} lg="3" className="contact-button-container">
                <Button {...(false ? {disabled: true} : { disabled: false})} className="contact-button" color="success" onClick={(e) => this.handleSubmit(e)}> Submit </Button>
                <br/>
              </Col>

            </AvForm>
          </Col>
        </Row>
      </Container>
    )
  }

}
