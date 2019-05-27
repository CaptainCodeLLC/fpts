import React, { Component } from 'react'
import Slider from './global/Carousel/Carousel'
import Mission from './Mission/';
import Services from './Services/';
import Team from './Team/Team';
import ClientCarousel from './ClientCarousel/';
import Testimonial from './Testimonial/Testimonial';
import Contact from './Contact/';
import News from './pages/News_Notes';
import Stats from './Stats';


export default class LandingSplash extends Component {
  render() {
    return (
        <div>
          <div id ="news"/>
            <Slider className ="carousel"/>
            
            <div style = {{backgroundColor:"#FEB032" ,height:'10px'}}/>
            <News  style = {{marginBottom:'15px'}}/>
            <div id = "mission"/>
            <Mission/>
            <br/>
            <Services/>
            <br/>
            <Team/>
            
            <br/>
            <ClientCarousel/>
            <br/>
            <Testimonial/>
            <br id = "contact"/>
            <Contact/>
        </div>
    )
  }
}
