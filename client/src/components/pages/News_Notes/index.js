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
            <h2>2018 Petitions Have Begun!</h2>
            <br/>
              <h3>  Income requests are being sent out daily from our office. If you have not yet done so, please send in any appropriate income documentation for your property.
              Please also continue to send in any damage claims and/or evidence from Hurricane Irma. Please <a href= "#contact">contact</a> our office with any questions.<br/> <br/>We’re here to serve you.</h3><br/>
              <p> By Florida statutes, property owners with an active appeal must pay the minimum taxes due by March 31st or the appeal will be canceled by the Value Adjustment Board (VAB). <br/>For important tax collector or property appraiser links, please view our<a href = "/resources"> resources </a>page.</p>
              <p>FPTS recommends tax bills be paid in full by the end of November in order to receive the 4% discount for early payment. If a reduction in the assessed value is achieved, the tax collector’s office will issue a refund of the overpayment to the individual who pays the property taxes. Business Tangible Personal Property returns (form DR-405) are due on or before April 1.  Please file your returns timely or you may be precluded from appealing the assessments at a later time.
              </p>
            </Col>
          </Row>
          <br/>
      </Container>
    )
  }
}
