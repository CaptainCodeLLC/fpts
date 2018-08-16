import React, { Component } from 'react'
import { Container, Row, Col, Nav, NavLink, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import './real-estate.css';


export default class RealEstate extends Component {

    render() {
        const specializations = ['ACLFs',
            'Hospitals',
            'Apartment Complexes',
            'Auto Dealerships',
            'Commercial Properties',
            'Condominiums',
            'Fast Food',
            'Financial Institutions',
            'Hotels and Motels',
            'Industrial and Manufacturing',
            'Mobile Home Parks',
            'Office Buildings',
            'Recreational Facilities',
            'Restaurants',
            'Shopping Centers',
            'Other Special Purpose',
            'Vacant Land',
            'Warehouses'
        ]

        const specializationList = specializations.map((category) =>
            <ListGroupItem >
                <ListGroupItemHeading>{category}</ListGroupItemHeading>
                {/* <ListGroupItemText>
                Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
             </ListGroupItemText> */}
            </ListGroupItem>
        )
        return (
            <div>
                <div className="real-estate-overlay">
                    <h1 className="real-estate-text">Real Estate</h1>
                </div>

                <Container className="real-estate-container">
                    <Row className="real-estate-content">
                        <Col lg='2'>
                            <Nav vertical>
                                Navigation
                        <NavLink href="#">Services</NavLink>
                                <NavLink href="#">Strategies</NavLink>
                                <NavLink href="#">Specializations</NavLink>
                            </Nav>
                        </Col>
                        <Col>
                            <h1>
                                Real-Estate Services
                    </h1>
                            <p>
                                FPTS is experienced in tax appeals for all types of commercial and residential properties. Our clients include individual property owners, major corporations, small businesses, real estate management companies, developers and more.
                    </p>
                            <h1>
                                Our Strategy
                        </h1>
                            <p>
                                We find reduction opportunities through analysis of historical real estate data and market trends combined with evaluation of specific conditions relating to your property. FPTS maximizes the potential for assessment reductions by utilizing in-depth research, advanced technologies, and well-developed case-building techniques.
                        </p>
                            <h1>
                                Specialization
                        </h1>
                            <p>
                                We successfully build cases for a variety of property types including, but not limited to:
                    </p>

                            <ListGroup style ={{marginBottom:'20px'}}>
                                {specializationList}
                            </ListGroup>
                        </Col>
                    </Row>
                </Container>
            </div>

        )
    }
}
