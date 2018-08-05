import React, { Component } from 'react'
import {Container,Col,Row} from 'reactstrap';



export default class ClientCarousel extends Component {
  render() {

    const CompanyNames = [ 
      'https://s3.amazonaws.com/fpts-images/aircanada.png'
    , 'https://s3.amazonaws.com/fpts-images/autonation.png', 
      'https://s3.amazonaws.com/fpts-images/burgerKing.png',
      'https://s3.amazonaws.com/fpts-images/carmaxLogo.png', 
      'https://s3.amazonaws.com/fpts-images/discoveryChannel.png', 
      'https://s3.amazonaws.com/fpts-images/ihop.png', 
      'https://s3.amazonaws.com/fpts-images/marriot.png', 
      'https://s3.amazonaws.com/fpts-images/mcDonalds.png',
      'https://s3.amazonaws.com/fpts-images/pandaExpress.png', 
      'https://s3.amazonaws.com/fpts-images/suntrust.png', 
      'https://s3.amazonaws.com/fpts-images/toyota.png', 
      'https://s3.amazonaws.com/fpts-images/wendys.png'
    ]


    const companyGrid = CompanyNames.map((company)=>
    
      <Col xs = '6' lg = '3'>
        <img style ={{margin:'20%',maxWidth:'80%', maxHeight:'300px'}}src={company} alt=""/>
      </Col>
      
  )
  
    return (
      <div /*style = {{backgroundColor:'darkgrey'}}*/>
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
