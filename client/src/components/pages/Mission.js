import React, { Component } from 'react';
import {Container} from 'reactstrap';
export default class Mission extends Component {
  render() {
    return (
      
        <Container id = "mission-container">
          <h1>Our Mission</h1>
          <hr/>
          <div className = "container">
            <h2>
              Mission/Philosophy
            </h2>
              <p> To provide our clients with the highest quality in professional property tax reduction services, applying client-centered care, advanced technology, innovative techniques and personal attention.
            </p>

            <br/>          
            <p>          
              Your time is valuable - let us do the work. FPTS has been in the business of reducing real estate and tangible personal property taxes since 1984, handling well over $6 billion in real estate anually in Florida. FPTS consistently produces property tax reductions at a rate that outperforms the county-wide industry average.
            </p>
            </div>
        </Container>
    )
  }
}
