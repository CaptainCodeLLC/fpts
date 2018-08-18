import React, { Component } from 'react'
import { Container, Row, Col, Nav, NavLink, Table, ListGroupItem, ListGroupItemHeading } from 'reactstrap';
import './tangible-personal-property.css';


export default class RealEstate extends Component {

    render() {
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
                                <NavLink href="#strategy">Strategy</NavLink>
                                <NavLink href="#tpp_specializations">Specializations</NavLink>
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
                            <h1 id = "strategy">
                                Our Strategy
                        </h1>
                            <p>
                                We handle all phases of the appeal process for you including tangible return rendering, timely appeal filing, site inspection, coordinating appraisals, case preparation and hearing representation
                            </p>
                            <h1 id = "tpp_specializations">
                                Specialization
                        </h1>
                            <p>
                                Also known as Business Personal Property, TPP includes machinery, equipment, furniture and fixtures in the following areas and categories:
                            </p>

                               <Table striped bordered>
                                
                                <tbody>
                                    <tr>
                                        <td colSpan= '6'><h4>Machinery</h4></td>
                                        <td colSpan= '6'><h4>Equipment</h4></td>
                                    </tr>
                                    <tr>
                                        <td colSpan= '6'><h4>Furniture & Fixtures</h4></td>
                                        <td colSpan= '6'><h4>Manufacturing</h4></td>
                                    </tr>
                                    <tr>
                                        <td colSpan= '6'><h4>Construction</h4></td>
                                        <td colSpan= '6'><h4>Professional Equipment</h4></td>
                                    </tr>
                                    <tr>
                                        <td colSpan= '6'><h4>Hospitals</h4></td>
                                        <td colSpan= '6'><h4>IT/Networks</h4></td>
                                    </tr>
                                    <tr>
                                        <td colSpan= '6'><h4>Nursery/Farm</h4></td>
                                        <td colSpan= '6'><h4>Restaurants</h4></td>
                                    </tr>
                                    <tr>
                                        <td colSpan= '6'><h4>Financial Institutions</h4></td>
                                        <td colSpan= '6'><h4>Auto Dealerships</h4></td>
                                    </tr>
                                    <tr>
                                        <td colSpan= '6'><h4>Medical Industry</h4></td>
                                        <td colSpan= '6'><h4>Plants & Factories</h4></td>
                                    </tr>
                                    <tr>
                                        <td colSpan= '6'><h4>Law Offices</h4></td>
                                        <td colSpan= '6'><h4>Distribution Centers</h4></td>
                                    </tr>
                                    
                                    <tr>
                                        <td colSpan= '6'><h4>Retailers</h4></td>
                                        <td colSpan= '6'><h4>Import/Export Wholesalers</h4></td>
                                    </tr>
                    
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </Container>
            </div>

        )
    }
}
