import React, { Component } from 'react'
import { Container, Row, Col, Nav, NavLink, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import './tangible-personal-property.css';


export default class RealEstate extends Component {

    render() {
        const specializations = [
            'Machinery',
            'Equipment',
            'Furniture & Fixtures',
            'Manufacturing',
            'Construction',
            'Professional Equipment',
            'Hospitals',
            'IT/Networks',
            'Nursery/Farm',
            'Restaurants',
            'Financial Institutions',
            'Auto Dealerships',
            'Medical Industry',
            'Plants & Factories',
            'Auto Dealerships',
            'Law Offices',
            'Distribution Centers',
            'Retailers',
            'Import/Export Wholesalers'
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
                <div className="tpp-overlay">
                    <h1 className="real-estate-text">Tangible Personal Property</h1>
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
                                Tangible Personal Property
                        </h1>
                            <p>
                            One of the most significant opportunities for businesses to increase profits is to appeal their Tangible Personal Property (TPP) assessments.
                            </p>
                            <p>
                            FPTS steadily achieves a high rate of success in reducing TPP taxes for our clients.
                            </p>
                            <h1>
                                Our Strategy
                        </h1>
                            <p>
                            We handle all phases of the appeal process for you including tangible return rendering, timely appeal filing, site inspection, coordinating appraisals, case preparation and hearing representation
                        </p>
                            <h1>
                                Specialization
                        </h1>
                            <p>
                                Also known as Business Personal Property, TPP includes machinery, equipment, furniture and fixtures in the following areas and categories:
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
