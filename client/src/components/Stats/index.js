import React, { Component } from 'react'
import {Container,Row,Col} from 'reactstrap';
import CountUp from 'react-countup';
import Parallax  from '../global/parallax/Parallax';
import stats from './images/stats.jpg'
import './stats.css';

export default class Stats extends Component {
  render() {
    return (
      <div>
        <Parallax text = "By the Numbers" src = {stats}/>
      <Container>
        
        <Row style ={{backgrounColor:"orange"}}>
          <Col className = "stats-container" lg = '4'>
          <div className = "stats-text-container">
            $<CountUp className ="count-text" start={0} end={7500000000} duration= {2.9} />
            <h1>Money saved</h1>
          </div>
          </Col>

          <Col lg = '4' className = "stats-container">
          <div className = "stats-text-container">
          $<CountUp className ="count-text" start={0} end={160526} duration= {3} />
          <h1>Money saved</h1>
          </div>
        </Col>
        <Col className = "stats-container" lg = '4' style ={{border:'none'}} >
          <div className=  "stats-text-container">
            $<CountUp className ="count-text" start={0} end={160526} duration= {4} />
            <h1>Money saved</h1>
            </div>
          </Col>
          
        </Row>
       
      </Container>
      </div>
    )
  }
}
