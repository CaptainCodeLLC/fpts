import React, { Component } from 'react'
import { Container, Row, Col, Input } from 'reactstrap';
import './resources.css'
import resources from './resources.jpg'
import ImportantDates from './ImportantDates/';
import Affiliations from './Affiliations/';
import ImportantLinks from './ImportantLinks';
import Parallax from '../../global/parallax/Parallax';

export default class Resources extends Component {
    render() {
        const caption = 
        <Container style ={{textAlign:'center'}}>
        <Row sm='12' id = "resources-links">
            <Col xs='12' sm='3' lg='2'>
                <a href="#dates">
                    <p>
                        Important Dates
                    </p>
                </a>
            </Col>
            <Col xs='12' sm='3' lg='2'>
                <a href="#affiliations">
                    <p>
                        Affiliations
                    </p>
                </a>
            </Col>
            <Col xs='12' sm='3' lg='2'>
                <a href="#links">
                    <p>
                        Links
                    </p>
                </a>
            </Col>
            <br/>
        </Row>
        {/* <Row id="dates">
            <Col id="resources-search" lg='4'>
                <Input id="search-style" placeholder="Search" />
            </Col>
        </Row> */}
    </Container>
        return (
            <div >
                <Parallax topOffset={70} search={true} text="Resources" caption = { caption} src={resources} />
                <div style = {{height:20}}id = "dates"/>
                <Container >

                <br/>

                <Row>
                    <br />
                    <h3>Important Dates</h3>
                </Row>
                <Row>
                    <Col lg='5'>
                        <h1>2017 VAB Tax appeal filing deadlines</h1>
                    </Col>

                    <Col lg='7'>
                        <ImportantDates />
                    </Col>
                </Row>
                <div id="affiliations" />
                <br />
                <Col lg='12'>
                    <h1>
                        Affiliations
            </h1>
                </Col>
                <br />

                <Container>

                    <Row>
                        <Affiliations />
                    </Row>
                    <div id="links" />
                    <br />
                    <Row>
                        <ImportantLinks />
                    </Row>
                    <br />
                </Container>
      </Container>
      </div >
    )
    }
}
