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
import Parallax from '../global/parallax/Parallax';
import team from './images/FPTSTeamCrop.jpg'


export default class Team extends Component {


  render() {
    const teamMembers1 = [
      {
      name: "Ronald Rodriguez",
      role: "President",
      role2:"Senior Property Tax Consultant",
      picture:ronald,
      bio:"Some information about Ronald",
      },

      {
        name: "Roberto P. Pelaez",
        role: "Vice President",
        role2: "Senior Property Tax Consultant",
        picture:m1,
        bio:"Some information about pres2",
      },
        {
          name: "Nicolas F. McDowell",
          role: "Vice President",
          role2:"Senior Property Tax Consultant",
          picture:m2,
          bio:"Some information about liz",
        }
      ]
      const teamMembers2=[
        {
          name: "Elizabeth Padron",
          role: "Office Manager",
          picture:l3,
          bio:"Some information about Maria",
        },
        {
          name: "Maria Archer",
          role: "Team Member",
          picture:maria,
          bio:"Some information about Maria",
        },
        {
          name: "Elizabeth Sanchez",
          role: "Team Member",
          picture:l1,
          bio:"Some information about pres2",
        },
        {
          name: "Jeanie Torres",
          role: "Team Member",
          picture:l2,
          bio:"Some information about liz",
        }
         

    ]

    const TeamGrid1 = teamMembers1.map((member) =>
      <Col lg = {{size:'4'}}>
      <TeamMember name = {member.name} image = {member.picture} role = {member.role} role2 = {member.role2} bio={member.bio}/>
    </Col>

    )
    const TeamGrid2 = teamMembers2.map((member) =>
      <Col lg = {{size:'3'}}>
      <TeamMember name = {member.name} image = {member.picture} role = {member.role} bio={member.bio}/>
    </Col>
  )

    return (
      <div>
        <Parallax src = {team} text = "The FPTS Team"/>
          <hr/>
          <Container>
          <Row className = "team-container">
            {TeamGrid1}
          </Row>
          <br/>
          <Row className = "team-container">
            {TeamGrid2}
          </Row>
          </Container>
      </div>
    )
  }
}
