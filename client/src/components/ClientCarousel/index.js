import React, { Component } from "react";
import Slider from "react-slick";
import {Container} from 'reactstrap';

import './client_carousel.css';

export default class ClientCarousel extends Component {
  render() {
    const settings = {
      autoplay:true,
      className: "center",
      centerMode: true,
      infinite: true,
      slidesToShow: 1,
      speed: 500,
      rows: 2,
      arrows:false,
      dots:true,
      slidesPerRow: 3
    };

    const companies = [
      'https://s3.amazonaws.com/fpts-images/aircanada.png',
      'https://s3.amazonaws.com/fpts-images/ihop.png',
      'https://s3.amazonaws.com/fpts-images/suntrust.png',
      'https://s3.amazonaws.com/fpts-images/mcDonalds.png',
      'https://s3.amazonaws.com/fpts-images/toyota.png',
      'https://s3.amazonaws.com/fpts-images/discoveryChannel.png',
      'https://s3.amazonaws.com/fpts-images/autonation.png',
      'https://s3.amazonaws.com/fpts-images/burgerKing.png',
      'https://s3.amazonaws.com/fpts-images/carmaxLogo.png',
      'https://s3.amazonaws.com/fpts-images/marriot.png',
      'https://s3.amazonaws.com/fpts-images/pandaExpress.png',
      'https://s3.amazonaws.com/fpts-images/wendys.png'
    ]
    const company = companies.map((company) => 
    <div>
        <img className = "client-carousel" src={company} alt=""/>
    </div>
    )
    return (
      <Container style = {{marginBottom: '60px',textAlign:'center'}}>
        <h1 className = "testimonial-header">Who We Serve</h1>
        <hr/>
        <Slider {...settings}>
          {company}
        </Slider>
      </Container>
    );
  }
}