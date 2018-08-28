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
        message: ''
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
            <AvForm style = {{margin:0}}>
              <Row>
                <Col>
                  <AvField
                    name="firstName"
                    placeholder="First Name"
                    value={this.state.firstName}
                    onChange={e => this.handleChange(e)}
                  />
                  <br />
                </Col>
                <Col>
                  <AvField
                    name="lastName"
                    placeholder="Last Name"
                    value={this.state.lastName}
                    onChange={e => this.handleChange(e)}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                <AvField
                  name="emailAddress" 
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
                  <Input
                    name="companyName"
                    placeholder="Company Name"
                    value={this.state.companyName}
                    onChange={e => this.handleChange(e)}
                  />
                  </Col>
                  <Col>
                  <AvField
                    name="telephoneProp" 
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
                name="companyName"
                placeholder="Subject Line"
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

              <Col style={{ textAlign: 'center' }} lg="3" className="contact-button-container">
                <Button {...(false ? {disabled: true} : { disabled: false})} className="contact-button" color="success" onClick={(e) => this.handleSubmit(e)}> Submit </Button>
              </Col>

            </AvForm>
          </Col>
        </Row>
      </Container>
    )
  }

}
