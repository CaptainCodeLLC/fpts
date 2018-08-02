import React, { Component } from 'react'
import {Container,Col,Row} from 'reactstrap';
import airCanada from './companyLogos/aircanada.png';
import autoNation from './companyLogos/autonation.png';
import burgerKing from './companyLogos/burgerKing.png';
import carmaxLogo from './companyLogos/carmaxLogo.png';
import discoveryChannel from './companyLogos/discoveryChannel.png';
import ihop from './companyLogos/ihop.png';
import marriot from './companyLogos/marriot.png';
import mcDonalds from './companyLogos/mcDonalds.png';
import pandaExpress from './companyLogos/pandaExpress.png';
import suntrust from './companyLogos/suntrust.png';
import toyota from './companyLogos/toyota.png';
import wendys from './companyLogos/wendys.png';



export default class ClientCarousel extends Component {
  render() {

    const CompanyNames = [ airCanada, autoNation, burgerKing, carmaxLogo, discoveryChannel,ihop, marriot,mcDonalds, pandaExpress, suntrust, toyota, wendys ]


    const companyGrid = CompanyNames.map((company)=>
    
      <Col xs = '6' lg = '3'>
        <img style ={{margin:'20%',maxWidth:'80%', maxHeight:'300px'}}src={company} alt=""/>
      </Col>
      
  )
  
    return (
      <div>
        <Container>
          <h1>Who we serve</h1>
          <br/>
          <Row>
          {companyGrid}
        </Row>
        </Container>
        
      </div>
    )
  }
}
