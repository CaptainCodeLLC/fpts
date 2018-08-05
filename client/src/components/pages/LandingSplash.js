import React, { Component } from 'react'
import Carousel from '../global/Carousel'
import Mission from './Mission';
import Services from './Services';
import Team from './Team';
import Stats from './Stats';
import ClientCarousel from './ClientCarousel';
import Testimonial from './Testimonial/Testimonial';
import Contact from './Contact';
import Footer from '../global/Footer';
import Navigation from '../global/navigation';

export default class LandingSplash extends Component {
  render() {
    return ( 
        <div>    
            <Carousel className ="carousel"/>
            <br/>
            <Mission/>
            <br/>
            <Services/>
            <br/>
            <Team/>
            <br/>
            <Stats/>
            <br/>
            <ClientCarousel/>
            <br/>
            <Testimonial/>
            <br/>
            <Contact/>
            <Footer/>
        </div>
    )
  }
}
