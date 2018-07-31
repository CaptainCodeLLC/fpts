import React, { Component } from 'react'
import {Container, Row, Col,Input} from 'reactstrap';
import {BrowserRouter, Route,Link} from 'react-router-dom';

import ImportantDates from './ImportantDates';

const routes = [
    // Important dates, Affiliations, links
    {
        path: '/important_dates',
        sidebar: () => <div></div>,
        main: () => <h2></h2>
    },
    {
        path: '/affiliations',
        sidebar: () => <div></div>,
        main: () => <h2></h2>
    },
    {
        path: '/links',
        sidebar: () => <div></div>,
        main: () => <h2></h2>
    }
]

export default class Resources extends Component {
  render() {
    return (
      <Container>
        <Row className ="resources-container">
            <Col>
                <h1 id ="resources-header">Resources</h1>
            </Col>    
        </Row>
        <Row id = "resources-links">
            <Col lg = '2'>
            <a  href= "/#Dates">
                <p>
                    Important Dates 
                </p>
            </a>
            </Col> |
            <Col lg = '2'>
                <p>
                    Affiliations
                </p>
            </Col>|
            <Col lg = '2'>
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
      </Container>
    )
  }
}
