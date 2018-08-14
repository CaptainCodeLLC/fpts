import React, {Component} from 'react'
import {Row, Col,Container } from 'reactstrap';
import PropTypes from 'prop-types';
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
        title:"IAAO",
        description: "International Association of Assessing Officers",
        icon: iaao,
      },
      {
        title:"IAAO",
        description: "International Association of Assessing Officers",
        icon: iaao,
      },
      {
        title:"IAAO",
        description: "International Association of Assessing Officers",
        icon: iaao,
      },
      {
        title:"IAAO",
        description: "International Association of Assessing Officers",
        icon: iaao,
      },
      {
        title:"IAAO",
        description: "International Association of Assessing Officers",
        icon: iaao,
      },
      {
        title:"IAAO",
        description: "International Association of Assessing Officers",
        icon: iaao,
      }

    ]
    const grid = affiliations.map((affiliate) =>
      <Col lg = '3'>
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
