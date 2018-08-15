import React, { Component } from 'react'
import {Container, Row, Col,Input} from 'reactstrap';
import './resources.css'
import ImportantDates from './ImportantDates/';
import Affiliations from './Affiliations/';
import ImportantLinks from './ImportantLinks';
// const routes = [
//     // Important dates, Affiliations, links
//     {
//         path: '/important_dates',
//         sidebar: () => <div></div>,
//         main: () => <h2></h2>
//     },
//     {
//         path: '/affiliations',
//         sidebar: () => <div></div>,
//         main: () => <h2></h2>
//     },
//     {
//         path: '/links',
//         sidebar: () => <div></div>,
//         main: () => <h2></h2>
//     }
// ]

export default class Resources extends Component {
  render() {
    return (
      <Container>
        <Row className ="resources-container">
            <Col>
                <h1 id ="resources-header">Resources</h1>
            </Col>
        </Row>
        <Row sm = '12' id = "resources-links">
            <Col xs = '3' sm = '3' lg = '2'>
            <a  href= "/#Dates">
                <p>
                    Important Dates
                </p>
            </a>
            </Col> |
            <Col xs = '3' sm = '3' lg = '2'>
                <p>
                    Affiliations
                </p>
            </Col>|
            <Col  xs = '3' sm = '3' lg = '2'>
                <p>
                    Links
                </p>
            </Col>
        </Row>
        <Row>
            <Col id = "resources-search" lg = '4'>
                <Input id ="search-style" placeholder = "Search"/>
            </Col>
        </Row>
        <Row>
            <h3>Important Dates</h3>
        </Row>
        <Row>
            <Col lg = '5'>
                <h1>2017 VAB Tax appeal filing deadlines</h1>
            </Col>
            <Col lg = '7'>
                <ImportantDates/>
            </Col>
        </Row>
          <Col lg = '12'>
            <h1>
                Affiliations
            </h1>
          </Col>
          <br/>
          <Container>
          <Row>
            <Affiliations/>
          </Row>
          <br/>
          <Row>
              <ImportantLinks/>
          </Row>
          <br/>
        </Container>
      </Container>
    )
  }
}
