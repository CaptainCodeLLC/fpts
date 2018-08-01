import React, { Component } from 'react';

import {Container, Col, Row, Card, CardImg,CardBody, CardTitle, CardSubtitle} from 'reactstrap';
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
    <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>{member.name}</CardTitle>
          <CardSubtitle>{member.role}<i style = {{position:'absolute', marginLeft:'50%'}}className="fas fa-info-circle"></i></CardSubtitle>
        </CardBody>
      </Card>
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
