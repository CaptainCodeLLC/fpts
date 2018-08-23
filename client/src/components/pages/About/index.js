import React, { Component } from 'react'
import {Container} from 'reactstrap';
import Parallax from '../../global/parallax/Parallax';
import './about.css';
export default class About extends Component {
  render() {
    return (
      <div>
        <Parallax topOffset = {100} text= "About FPTS" src = "https://s3.amazonaws.com/fpts-images/about.jpg"/>
        <Container className= "about-container">
          <h1>
            <strong>Appealing Property Taxes Since 1984</strong>
          </h1>
          <p>
            Your time is valuable - let us do the work. FPTS has been in the business of reducing real estate and tangible personal property taxes since 1984, handling well over $7.5 billion in real estate annually in Florida. FPTS consistently produces property tax reductions at a rate that outperforms the county-wide industry average.
          </p>
          <h1>
            Our Philosophy
          </h1>
          <p>
            To provide our clients with the highest quality in professional property tax reduction services, applying client-centered care, advanced technology, innovative techniques and personal attention.
          </p>
          <br/>
        </Container>
      </div>
    )
  }
}
