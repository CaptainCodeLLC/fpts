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

            <h3>
            By Florida statutes, property owners with an active appeal must pay the minimum taxes due by March 31st or the appeal
            will be canceled by the Value Adjustment Board (VAB). Even if your appeal has been heard and reduced, failure to pay 
            your property taxes by the March 31st deadline will result in a cancellation of your reduction. For important tax collector
            or property appraiser links, please view our <a href = "/resources">resources</a> page.
            </h3>
            <br/>
            <h3>
            FPTS recommends tax bills be paid in full by the end of November in order to receive the 4% discount for early payment. If a reduction in the assessed value is achieved, the tax collector’s office will issue a refund of the overpayment to the individual who pays the property taxes. Business Tangible Personal Property returns (form DR-405) are due on or before April 1. Please file your returns timely or you may be precluded from appealing the assessments at a later time.
            </h3>
            <br/>

              
            </Col>
          </Row>
          <br/>
      </Container>
    )
  }
}
