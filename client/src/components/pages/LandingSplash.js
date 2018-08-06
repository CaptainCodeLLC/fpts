import React, { Component } from 'react'
import Slider from '../global/Carousel/Carousel'
import Mission from './Mission';
import Services from './Services';
import Team from './Team/Team';
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
            <Slider className ="carousel"/>
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
