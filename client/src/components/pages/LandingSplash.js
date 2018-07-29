import React, { Component } from 'react'
import {Container, Row, Col, Input} from 'reactstrap';
import Carousel from '../global/Carousel'
import Mission from './Mission';

export default class LandingSplash extends Component {
  render() {
    return (
    <div>
        <div clasName = "carousel-container">
            <Carousel className ="carousel"/>
            <Container>
                <Row>
                    <Col className ="company-tagline" lg = '12'>
                        <h1>Florida Property Tax Service</h1>
                    </Col>
                </Row>
                <Row>
                    <Col >
                        <h2 id = "company-copy"> "Helping our clients save millions every year"</h2>
                    </Col>
                </Row>
                <Row>
                    <Col className = "mx-auto" lg = '4' md ='5' sm = "6" xs = '7'>
                        <Input className = "email-input" placeholder = "Enter your email for more information"/>
                    </Col>
                </Row>
            </Container>
        
        </div>
        
      <Mission/>
      </div>
    )
  }
}
