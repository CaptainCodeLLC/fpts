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
        <Row xs = "12" style ={{width:'100%',backgrounColor:"orange"}}>
          <Col xs = "12" className = "stats-container" lg = '3'>
          <div className = "stats-text-container">
            $<CountUp className ="count-text" start={0} end={7500000000} duration= {2.9} />
            <h1>Money saved</h1>
          </div>
          </Col>
        <Col xs = "12" lg = '3' className = "stats-container">
          <div className = "stats-text-container">
          <CountUp className ="count-text" start={0} end={160526} duration= {3} />
          <h1>Clients serviced</h1>
          </div>
        </Col>
        <Col xs = "12" lg = '3' className = "stats-container">
          <div className = "stats-text-container">
          <CountUp className ="count-text" start={0} end={160526} duration= {3} />
          <h1>Clients serviced</h1>
          </div>
        </Col>
        <Col xs = "12" className = "stats-container" lg = '3' style ={{border:'none'}} >
          <div className=  "stats-text-container">
            $<CountUp className ="count-text" start={0} end={160526} duration= {4} />
            <h1>Money saved</h1>
            </div>
          </Col>
          
        </Row>
        {/* <Parallax style ={{position:'relative!important'}} text = "By the Numbers" src = {stats}/> */}
      
      </div>
    )
  }
}
