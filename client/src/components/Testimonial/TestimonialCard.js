import React, { Component } from 'react'
import {Col} from 'reactstrap';
export default class TestimonialCard extends Component {
  render() {
    return (
      <Col lg = '4'className = "testimonial-card">
        <img id = "testimonial-card-headshot"src={this.props.image} alt=""/>
        <h1 id = "testimonial-card-name">{this.props.name}</h1>
        <h2 id = "testimonial-card-company">{this.props.companyName}</h2>
        <p id = "testimonial-text">{this.props.review}</p>
        <div id = {this.props.verticalLine}/>
      </Col>
    )
  }
}
