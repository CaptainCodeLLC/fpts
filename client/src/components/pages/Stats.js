import React, { Component } from 'react'
import {Container,Row,Col} from 'reactstrap';
import CountUp from 'react-countup';

export default class Stats extends Component {
  render() {
    return (
      <Container>
        <h1>By the numbers</h1>
        <Container>
        <Row>
          <Col lg = '4' style= {{textAlign:'center'}}>
          
            $<CountUp className ="count-text" start={0} end={160526} duration= {2} />
            <h1>Money saved</h1>
          </Col>

          <Col lg = '4' style= {{textAlign:'center'}}>
          
          $<CountUp className ="count-text" start={0} end={160526} duration= {3} />
          <h1>Money saved</h1>
        </Col>
        <Col lg = '4' style= {{textAlign:'center'}}>
          
            $<CountUp className ="count-text" start={0} end={160526} duration= {4} />
            <h1>Money saved</h1>
          </Col>
        </Row>
        </Container>
       
      </Container>
    )
  }
}
