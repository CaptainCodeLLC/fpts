import React, { Component } from 'react'
import {Container, Row, Col} from 'reactstrap';
import './news-notes.css';
export default class News extends Component {
  render() {
    return (
      <Container>
        <br/>
          <h1>
              Current News
          </h1>
          <hr/>
          <Row>
            <Col lg = {{size:'11',offset:'1'}}>

            <br/>
            <h2>2019 Petition Filings are around the corner. Renewals are already under way, please help us prepare by sending in your renewal as soon as possible.</h2>
            <br/>              
            </Col>
          </Row>
          <br/>
      </Container>
    )
  }
}
