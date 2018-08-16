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
      bio:"A licensed real estate broker and former ASA candidate member, Ronald heads the Tangible Personal Property (TPP) department while overseeing and administering the real property tax appeals. "+
     "He coordinates operations, client communications, business procurement and collections. Ronald is a graduate from the University of Miami with a degree in International Finance and Marketing."
      
      },

      {
        name: "Roberto P. Pelaez",
        role: "Vice President",
        role2: "Senior Property Tax Consultant",
        picture:m1,
        bio:"A licensed real estate broker, Roberto is responsible for market data procurement and media management. He prepares and administers property tax appeals through proven case preparation strategies and analysis. Roberto is a graduate from Florida International University with a degree in Finance."
        ,
      },
        {
          name: "Nicolas F. McDowell",
          role: "Vice President",
          role2:"Senior Property Tax Consultant",
          picture:m2,
          bio:"A licensed real estate broker with a background in construction, Nicolas is responsible for information procurement and county communications. He prepares and administers property tax appeals through proven case preparation strategies and analysis. Nicolas is a graduate from the University of Florida with a degree in Finance."
        }
      ]
      const teamMembers2=[
        {
          name: "Elizabeth Padron",
          role: "Office Manager",
          picture:l3,
          bio:"Elizabeth has been with the company since 1994 and is responsible for overseeing general office administration. Elizabeth is our main client liaison and works closely with each property owner throughout the appeal process. additionally, Elizabeth holds a bachelor's degree in Human Resources Management from Florida International University."
        },
        {
          name: "Maria Archer",
          role: "Team Member",
          picture:maria,
          bio:"Maria is part of our team assisting with county communications and client relations. Additionally, she is responsible for tangible personal property information management, case management and invoicing."
        },
        {
          name: "Elizabeth Sanchez",
          role: "Team Member",
          picture:l1,
          bio:"Elizabeth is part of our team assisting with county communications, scheduling and client relations. Additionally, she is responsible for case management and accounts receivable."
        },
        {
          name: "Jeanie Torres",
          role: "Team Member",
          picture:l2,
          bio:"Jeanie is part of our team responsible for data integrity and information management."
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
            <Row className = "team-container-2">
              {TeamGrid2}
            </Row>
          </Container>
      </div>
    )
  }
}
