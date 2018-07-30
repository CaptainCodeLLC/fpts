import React, { Component } from 'react'
import {Container, Row, Col, Input} from 'reactstrap';
import Carousel from '../global/Carousel'
import Mission from './Mission';
import Services from './Services';
import Team from './Team';
import Stats from './Stats';
import ClientCarousel from './ClientCarousel';
import Testimonial from './Testimonial';
import Contact from './Contact';
import Footer from '../global/Footer';

export default class LandingSplash extends Component {
  render() {
    return ( 
        <div>       
            <Carousel className ="carousel"/>
            <Mission/>
            <Services/>
            <Team/>
            <Stats/>
            <ClientCarousel/>
            <Testimonial/>
            <Contact/>
            <Footer/>
        </div>
    )
  }
}
