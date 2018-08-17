import React, { Component } from 'react'
import {Container,Row, Col } from 'reactstrap';
import TestimonialCard from './TestimonialCard';
import saraff from './headshots/saraff_logo.png';
import ludovici from './headshots/Ludovici.jpg';
import keyInternational from './headshots/keyInternational.jpg'
import './testimonial.css'

export default class Testimonial extends Component {


  render() {
    const clients = [
      {
        clientName: 'Osvaldo Sarraff',
        companyName:'Sarraff Store Fixtures & Equipment',
        clientPicture:saraff,
        review:'“Last year, I retained FPTS to lower my property tax bill. Even though it was evident that it was going to be a far shot to obtain any property tax reduction, I was very impressed with the effort the entire staff put forth to present a case. I received a reduction in my Tangible tax, but more importantly I established a relationship with a professional organization that I can count on to diligently represent me.”',
        verticalLine:"testimonial-vertical-line",
        link:"https://sarraff.com/"
      },
      {
        clientName: 'John Hall',
        companyName:'Ludovici & Orange',
        clientPicture:ludovici,
        review:'“Quick, painless, effective. Count me as a satisfied customer. See you again next year.”',
        verticalLine:"testimonial-vertical-line",
        link:"https://ludovici-orange.com/index.html"

      },
      {
        clientName: 'Inigo Ardid',
        companyName:'Key International',
        clientPicture:keyInternational,
        review: '“Florida Property Tax Service has been representing us since 1990. Having a diverse real estate portfolio worth more than $600 million, choosing the best real estate tax advisor is critical to our bottom line. FPTS has delivered strong results for us year after year and that is why we continue using their services and referring clients to them.”',
        link: "http://www.key-international.com/"
      },
  ]

  const testimonialGrid = clients.map((client) =>

      <TestimonialCard name = {client.clientName}
                      image = {client.clientPicture}
                      review = {client.review}
                      // verticalLine = {client.verticalLine}
                      link = {client.link}/>

  )

    return (
      <Container>
          <Col xs = "12" lg = "12">
            <h2>
              What Our Clients Say
            </h2>
             <hr style ={{borderWidth:'1px', borderColor:'orange'}}/>
             </Col>
             <br/>
          <Row>

            {testimonialGrid}
          </Row>
      </Container>
    )
  }
}
