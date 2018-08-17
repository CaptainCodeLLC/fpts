import React, {Component} from 'react'
import {Row, Col } from 'reactstrap';

import iaao from './images/iaao.png'
import ciasf from './images/ciasf-logo.png';
import gables from './images/coral-gables-logo.png';
import crew from './images/crew-miami.png';
import hotel from './images/hotel-association.png';
import miamiBeach from './images/MBCOC.png';
import nptg from './images/national-property-tax-group.png';
import um from './images/um-alumni-association.png';

import IconCard from './IconCard';
import './icon.css';

export default class Icon extends Component {

  render () {
    const affiliations = [
      {
        title:"IAAO",
        description: "International Association of Assessing Officers",
        icon: iaao,
      },
      {
        title:"NAPTAG",
        description: "National Property Tax Group",
        icon: nptg,
      },
      {
        title:"CIASF",
        description: "Commercial Industrial Association of South Florida",
        icon: ciasf,
      },
      {
        title:"CGCOC",
        description: "Coral Gables Chamber of Commerce",
        icon: gables,
      },
      {
        title:"Crew Miami",
        description: "Meeting Warehousing Needs in South Florida",
        icon: crew,
      },
      {
        title:"MCOC",
        description: "Miami Beach Chamber of Commerce",
        icon: miamiBeach,
      },
      {
        title:"Greater Miami Hotel Association",
        description: "Partners in Hospitality",
        icon: hotel,
      },
      {
        title:"University of Miami",
        description: "Alumni Association",
        icon: um,
      }

    ]
    const grid = affiliations.map((affiliate) =>
      <Col xs = '6' lg = '3'>
        <IconCard img = {affiliate.icon} title = {affiliate.title} description = {affiliate.description}/>
      </Col>
  )

    return(
      <Row>
        {grid}
      </Row>

    )
  }
}
