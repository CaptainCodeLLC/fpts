import React, { Component } from 'react';
import {Container,Col} from 'reactstrap';
import './mission.css'
import team from './images/misson2.jpg';
import Parallax from '../global/parallax/Parallax';

export default class Mission extends Component {

  render() {
    return (

        <div id = "mission-container">

          <Parallax src={team} topOffset={90} text="Our Mission" caption = "Your time is valuable - let us do the work."/>
       
          <Container>
            <h2>
              Mission/Philosophy
            </h2>
              <Col>
              <p className = "section-content"> 
                FPTS wants to provide our clients with the highest quality in professional property tax reduction services by applying client-centered care, advanced technology, innovative techniques and personal attention.
              </p>
            <br/>
            <p className = "section-content">
              We have been in the business of reducing real estate and tangible personal property taxes since 1984, handling well over $7.5 billion in real estate annually in Florida. FPTS consistently produces property tax reductions at a rate that outperforms the county-wide industry average.
            </p>
            </Col>
            </Container>
        </div>
    )
  }
}
