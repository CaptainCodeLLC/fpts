import React, { Component } from 'react';

import {Container, Col, Row, Card, CardImg,CardBody, CardTitle, CardSubtitle} from 'reactstrap';
import TeamMember from './TeamMember';



export default class Team extends Component {

 
  render() {
    const teamMembers = [
      {
      name: "Ronald Rodriguez",
      role: "President",
      picture:"someimg",
      bio:"Some information about Ronald",
      },

      {
        name: "Ronald Rodriguez",
        role: "President",
        picture:"someimg",
        bio:"Some information about Ronald",
      },
        {
          name: "Ronald Rodriguez",
          role: "President",
          picture:"someimg",
          bio:"Some information about Ronald",
        },
        {
          name: "Ronald Rodriguez",
          role: "President",
          picture:"someimg",
          bio:"Some information about Ronald",
        },
    ]

    const TeamGrid = teamMembers.map((member) =>
      <Col lg = '3'>
      <TeamMember name = {member.name} role = {member.role} bio={member.bio}/>
    </Col>
  
    )
    return (
      <Container>
          <h1>The FPTS Team</h1>
          <Row>
            {TeamGrid}
          </Row>
      </Container>
    )
  }
}
