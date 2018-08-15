import React, { Component } from 'react'
import {Col} from 'reactstrap';
export default class TestimonialCard extends Component {
  render() {
    return (
      <Col lg = '4'className = "testimonial-card">
      <a href={this.props.link}>
        <img style = {{maxWidth:'100%', marginBottom:'10px'}} src={this.props.image} alt=""/>
      </a>
        <h2 id = "testimonial-card-company">{this.props.companyName}</h2>
        <h2 id = "testimonial-card-name">{this.props.name}</h2>
        
        <p id = "testimonial-text">{this.props.review}</p>
        <div id = {this.props.verticalLine}/>
      </Col>
    )
  }
}
