import React, { Component } from 'react'
import {Container, Row, Col,Card, CardBody,CardTitle, CardSubtitle, Button} from 'reactstrap';
export default class Services extends Component {
  render() {

    const cardInfo = [
      {
      cardTitle:"Real Estate Property",
      cardSubtitle:"Some information",
      cardImage:{},
      cardText:"",
      link: "https://twitter.com",
      cardLink2: ""
    },
    {
      cardTitle:"Tangible Personal Property",
      cardSubtitle:"Some information",
      cardImage:{},
      cardText:"",
      cardLink1: "",
      cardLink2: ""
    },

    ]

    const CardObj = cardInfo.map((card) =>
      <Col className ="mx-auto" lg = '4'>
        <Card>
          <CardBody>
            <CardTitle>{card.cardTitle}</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
          </CardBody>
          <img width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card cap" />
          <CardBody>
            {/* <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText> */}
            <Button color = "warning"  href = {card.link} style= {{width:'50%', marginLeft:'25%'}}> More info</Button>
          </CardBody>
        </Card>
      </Col>
    ) 


    return (
      <Container>
        <Row>
          <h1>Approach and Services</h1>
        </Row>
        <Container>
          <p><span className = "emphasis">What we do</span>:  We prepare for your property tax appeal through an intensive research process, producing straightforward but highly effective presentations specifically tailored to each individual property. Mirroring the county’s assessment practices, FPTS combines comprehensive research capabilities and advanced technology with creative and innovative techniques to build a solid and convincing case for assessment reductions
            </p>
          <Row>
            {CardObj}
          </Row>
        </Container>
      </Container>
    )
  }
}
