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
      cardSubtitle:"Some information",
      cardImage:downtownNighttime,
      cardText:"",
      link: "/real_estate_property",
    },
    {
      cardTitle:"Tangible Personal Property",
      cardSubtitle:"Protect the things you care about",
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
          <Parallax src = {downtownNighttime} text = 'Approach and Services'/>
        <Container>
          <br/>
          <p><span className = "emphasis">What we do </span>    We prepare for your property tax appeal through an intensive research process, producing straightforward but highly effective presentations specifically tailored to each individual property. Mirroring the county’s assessment practices, FPTS combines comprehensive research capabilities and advanced technology with creative and innovative techniques to build a solid and convincing case for assessment reductions
            </p>
          <Row>
            {CardObj}
          </Row>
        </Container>
      </div>
    )
  }
}
