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
            <h2>2018 Property Tax Due March 31, 2019!</h2>
            <br/>

            <h3>
            By Florida statutes, property owners with an active appeal must pay the minimum taxes due by March 31st or the appeal
            will be canceled by the Value Adjustment Board (VAB). Even if your appeal has been heard and reduced, failure to pay 
            your property taxes by the March 31st deadline will result in a cancellation of your reduction. For important tax collector
            or property appraiser links, please view our <a href = "/resources">resources</a> page.
            </h3>
            <br/>
            <h2>
              2019 Tangible Personal Tax Returns Due by April 1, 2019!
            </h2>

            <br/>
            <h3>
              Business Tangible Personal Property returns (DR-405) are due on or before April 1. FPTS recommends that you file these returns in person and keep a county stamped copy for your records. If an in-person visit is not possible, mail the return to the county via return receipt request with signature verification for your records. Failure to file a timely tangible return will result in assessment penalties AND forfeiture of your rights to appeal the tangible valuation. Should you need any assistance in filing or preparing a return, please contact our office. <b>Returns need to be received (not postmarked) by the county on or before April 1, 2019!</b>
            </h3>
            <br/>
            <h2>
              2018 Appeals Ending Soon
            </h2>
            <br/>
            <h3>
            The 2018 Appeals cycle will come to a close April 11th. If you’re petition is pending, results of your appeal should be available by the end of April.  Please <a href = "#contact">contact</a> our office with any questions.
            </h3>
            <br/>

              
            </Col>
          </Row>
          <br/>
      </Container>
    )
  }
}
