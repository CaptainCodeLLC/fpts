import React, { Component } from "react";
import Slider from 'react-slick';
import {Row, Col, Container} from 'reactstrap';
export default class VerticalSwipeToSlide extends Component {
  render() {
    const settings = {
      dots: false,
      centerMode:true,
      autoplay:true,
      autoplaySpeed:4000,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      vertical: true,
      verticalSwiping: true,
      swipeToSlide: true,
      arrows:false,
      beforeChange: function(currentSlide, nextSlide) {
        console.log("before change", currentSlide, nextSlide);
      },
      afterChange: function(currentSlide) {
        console.log("after change", currentSlide);
      }
    };
    return (
      <Container>
        <Slider {...settings}>
          <Row className = "v-slide">
            <Col>
                <h3 className= "slide-text">ACLFs</h3>
            </Col>
          </Row>
          <Row className = "v-slide">
            <h3 className= "slide-text">1</h3>
          </Row>
          <Row className = "v-slide">
            <h3 className= "slide-text" >1</h3>
          </Row>
          <Row className = "v-slide">
            <h3 className= "slide-text" >1</h3>
          </Row>
          <Row className = "v-slide">
            <h3 className= "slide-text" >1</h3>
          </Row>
          <Row className = "v-slide">
            <h3 className= "slide-text">1</h3>
          </Row>
          <Row className = "v-slide">
            <h3 className= "slide-text">1</h3>
          </Row>
        </Slider>
      </Container>
    );
  }
}