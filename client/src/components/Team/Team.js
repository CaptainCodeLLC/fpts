import React, { Component } from 'react';

import {Container, Col, Row, Card, CardImg,CardBody, CardTitle, CardSubtitle} from 'reactstrap';
import TeamMember from './TeamMember';
import ronald from './images/ronald.jpg';
import m1 from './images/m1.jpg';
import m2 from './images/m2.jpg';
import l1 from './images/l1.jpg';
import l2 from './images/l2.jpg';
import l3 from './images/l3.jpg';
import maria from './images/maria.jpg';




export default class Team extends Component {


  render() {
    const teamMembers1 = [
      {
      name: "Ronald Rodriguez",
      role: " President ",
      picture:ronald,
      bio:"Some information about Ronald",
      },

      {
        name: "firstName lastName",
        role: "President2",
        picture:m1,
        bio:"Some information about pres2",
      },
        {
          name: "firstName lastName",
          role: " President3",
          picture:m2,
          bio:"Some information about liz",
        }
      ]
      const teamMembers2=[
        {
          name: "Maria ",
          role: " President3",
          picture:maria,
          bio:"Some information about Maria",
        },

        {
          name: "firstName lastName",
          role: "President2",
          picture:l1,
          bio:"Some information about pres2",
        },
          {
            name: "firstName lastName",
            role: " President3",
            picture:l2,
            bio:"Some information about liz",
          },
          {
            name: "firstName lastName",
            role: " President3",
            picture:l3,
            bio:"Some information about Maria",
          },

    ]

    const TeamGrid1 = teamMembers1.map((member) =>
      <Col lg = {{size:'4'}}>
      <TeamMember name = {member.name} image = {member.picture} role = {member.role} bio={member.bio}/>
    </Col>

    )
    const TeamGrid2 = teamMembers2.map((member) =>
      <Col lg = {{size:'3'}}>
      <TeamMember name = {member.name} image = {member.picture} role = {member.role} bio={member.bio}/>
    </Col>
  )

    return (
      <Container>
          <h1>The FPTS Team</h1>
          <hr/>
          <Row className = "team-container">
            {TeamGrid1}
          </Row>
          <br/>
          <Row className = "team-container">
            {TeamGrid2}
          </Row>
      </Container>
    )
  }
}
