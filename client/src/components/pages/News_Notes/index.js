import React, { Component } from 'react'
import {Container, Row, Col} from 'reactstrap';
import './news-notes.css';
export default class News extends Component {
  render() {
    return (
      <Container>
          <h1>
              Welcome to news section
          </h1>
          <Row>
            <h2>2018 Petition Filings are around the corner.</h2>

            <p> If your property sustained damages as a result of Hurricane Irma, we can help! <br/> Please <a href = "/contact">contact </a>our office for a <strong>free</strong> consultation.</p>


            <p> By Florida statutes, property owners with an active appeal must pay the minimum taxes due by March 31st or the appeal will be canceled by the Value Adjustment Board (VAB). <br/>For important tax collector or property appraiser links, please view our<a href = "/resources"> resources </a>page.</p>

            <p>FPTS recommends tax bills be paid in full by the end of November in order to receive the 4% discount for early payment. If a reduction in the assessed value is achieved, the tax collector’s office will issue a refund of the overpayment to the individual who pays the property taxes. Business Tangible Personal Property returns (form DR-405) are due on or before April 1.  Please file your returns timely or you may be precluded from appealing the assessments at a later time.
            </p>

          </Row>
      </Container>
    )
  }
}
