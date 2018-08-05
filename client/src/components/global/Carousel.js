import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';

import coastline from '../../images/coastline.jpg';
import downtownNighttime from '../../images/downtownNighttime.jpg';
import miamiSkyline from '../../images/miamiSkyline.jpg';
import parkingGarage from '../../images/parkingGarage.jpg';
import parkingGarage1 from '../../images/parkingGarage1.jpg';
import rooftop from '../../images/rooftop.jpg';
import sunrise from '../../images/sunrise.jpg';
import sunset from '../../images/sunset.jpg';
import traffic from '../../images/traffic.jpg';
import wynwood from '../../images/wynwood.jpg';
const items = [
  {
    src: wynwood,
    caption:"Wynwood Walls, Midtown"
    
  }, {
    src: coastline,
    caption: "Miami Beach Coastline"
  }, {
    src: downtownNighttime,
    caption: "testing"
  }, {
    src: miamiSkyline,
    caption: "testing"
  }, {
    src: parkingGarage,
    caption: "testing"
  }, {
    src: parkingGarage1,
    caption: "testing"
  }, {
    src: rooftop,
    caption: "testing"
  }, {
    src: sunrise,
    caption: "testing"
  }, {
    src: sunset,
    caption: "testing"
  }, {
    src: traffic,
    caption: "testing"
  }

];

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }  

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (

        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
      
        <img className="carousel-img" src={item.src} alt={item.altText} />
            <CarouselCaption captionHeader={item.caption} />
        </CarouselItem>   
    
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        
        {slides}
        
        {/* <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} /> */}
      </Carousel>
    );
  }
}


export default Example;