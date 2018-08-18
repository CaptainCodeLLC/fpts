import React, { Component } from 'react'
import { Container, Row, Col, Nav, NavLink, Table } from 'reactstrap';
import './real-estate.css';


export default class RealEstate extends Component {

render(){
    
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
                                Specializations
                        </h1>
                            <p>
                                We successfully build cases for a variety of property types including, but not limited to:
                    </p>

                            <Table striped bordered>
                                
                                <tbody>
                                    <tr>
                                        <td colSpan= '6'><h4>Hospitals</h4></td>
                                        <td colSpan= '6'><h4>Apartment Complexes</h4></td>
                                    </tr>
                                    <tr>
                                        <td colSpan= '6'><h4>Auto Dealerships</h4></td>
                                        <td colSpan= '6'><h4>Commercial Properties</h4></td>
                                    </tr>
                                    <tr>
                                        <td colSpan= '6'><h4>Condominiums</h4></td>
                                        <td colSpan= '6'><h4>Fast Food</h4></td>
                                    </tr>
                                    <tr>
                                        <td colSpan= '6'><h4>Financial Institutions</h4></td>
                                        <td colSpan= '6'><h4>Hotels and Motels</h4></td>
                                    </tr>
                                    <tr>
                                        <td colSpan= '6'><h4>Industrial and Manufacturing</h4></td>
                                        <td colSpan= '6'><h4>Mobile Home Parks</h4></td>
                                    </tr>
                                    <tr>
                                        <td colSpan= '6'><h4>Office Buildings</h4></td>
                                        <td colSpan= '6'><h4>Recreational Facilities</h4></td>
                                    </tr>
                                    <tr>
                                        <td colSpan= '6'><h4>Restaurants</h4></td>
                                        <td colSpan= '6'><h4>Shopping Centers</h4></td>
                                    </tr>
                                    <tr>
                                        <td colSpan= '6'><h4>Warehouses</h4></td>
                                        <td colSpan= '6'><h4>Vacant Land</h4></td>
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
