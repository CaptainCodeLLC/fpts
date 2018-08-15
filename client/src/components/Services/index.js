import React, { Component } from 'react'
import {Container, Row, Col,Card, CardBody,CardTitle, CardSubtitle, Button} from 'reactstrap';
import coastline from './images/coastline.jpg';
import downtownNighttime from './images/downtownNighttime.jpg';
import './services.css'
import Parallax from '../global/parallax/Parallax';
export default class Services extends Component {
  render() {

    const cardInfo = [
      {
      cardTitle:"Real Estate",
      cardSubtitle:"Commercial and Residential Property",
      cardImage:downtownNighttime,
      cardText:"",
      link: "/real_estate_property",
    },
    {
      cardTitle:"Tangible Personal Property",
      cardSubtitle:"Protect what you care about",
      cardImage:coastline,
      cardText:"",
      link:"/tangible_personal_property",
    },

    ]

    const CardObj = cardInfo.map((card) =>
      <Col className ="mx-auto" lg = '4'>
        <Card>
          <CardBody>
            <CardTitle>{card.cardTitle}</CardTitle>
            <CardSubtitle>{card.cardSubtitle}</CardSubtitle>
          </CardBody>
          <img width="100%" src={card.cardImage} alt="Card cap" />
          <CardBody>
            <Button color = "warning"  href = {card.link} style= {{width:'50%', marginLeft:'25%'}}> More info</Button>
          </CardBody>
        </Card>
      </Col>
    )


    return (
      <div>
          <Parallax src = {downtownNighttime} caption= "Innovative • Thorough • Effective" text = 'Approach and Services'/>
        <Container>
          <br/>
        <p className = "section-content"> <span className = "emphasis">Approach</span></p>
          <ol>
            <li>
              <p className = "services-content">Review and analyze your property</p>
            </li>
            <li>
              <p className = "services-content">Obtain current and past assessment information</p>
            </li>
            <li>
              <p className = "services-content">Determine current assessment method</p>
            </li>
            <li>
              <p className = "services-content">Obtain necessary property information</p>
            </li>
            <li>
              <p className = "services-content">Prepare file petitions</p>
            </li>
            <li>
              <p className = "services-content">Perform field inspections</p>
            </li>
            <li>
              <p className = "services-content">Analyze comparable market sales and income values of property</p>
            </li>
            <li>
              <p className = "services-content">Analyze cost approach</p>
            </li>
            <li>
              <p className = "services-content">Consult the county assessors</p>
            </li>
            <li>
              <p className = "services-content">Prepare pictures, aerials, site layouts and value data for presentation to the Value Adjustment Board</p>
            </li>
            <li>
              <p className = "services-content">Appear before the Value Adjustment Board</p>
            </li>
            <li>
              <p className = "services-content">Handle all correspondence with the Property Appraiser's office</p>
            </li>
            <li>
              <p className = "services-content">Assist in obtaining refunds</p>
            </li>
          </ol>
          <br/>
          <p className = "section-content"><span className = "emphasis">Services </span>  We prepare for your property tax appeal through an intensive 
          research process, producing straightforward but highly effective presentations specifically tailored to each 
          indvidual property. Mirroring the county’s assessment practices, FPTS combines comprehensive researchcapabilities and advanced technology with creative and innovative techniques to build a solid and convincing case for assessment reductions.
          </p>
          <Row>
            {CardObj}
          </Row>
          
        </Container>
      </div>
    )
  }
}
