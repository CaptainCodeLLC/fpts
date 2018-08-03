import React, { Component } from 'react'
import {Container} from 'reactstrap';
import axios from 'axios';

export default class Contact extends Component {
  state = {
    firstName: '',
    lastName: '',
    emailAddress: '',
    phoneNumber: '',
    companyName: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
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
      companyName: ''
    })
  }

  render() {
    return (
      <Container>
      <div>
        <h1>Contact Form</h1>
        <form>
          <input
            name="firstName"
            placeholder="First Name"
            value={this.state.firstName}
            onChange={e => this.handleChange(e)}
          />
          <input 
            name="lastName"
            placeholder="Last Name"
            value={this.state.lastName}
            onChange={e => this.handleChange(e)}
          />
          <input 
            name="emailAddress"
            placeholder="E-Mail Address"
            value={this.state.emailAddress}
            onChange={e => this.handleChange(e)}
          />
          <input 
            name="phoneNumber"
            placeholder="Phone Number"
            value={this.state.phoneNumber}
            onChange={e => this.handleChange(e)}
          />
          <input 
            name="companyName"
            placeholder="Company Name"
            value={this.state.companyName}
            onChange={e => this.handleChange(e)}
          />
         
          <button onClick={(e) => this.handleSubmit(e)}> SUBMIT </button>
        </form>
      </div>
      </Container>
    )
  }
  
}
