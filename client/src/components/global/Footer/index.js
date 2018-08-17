import React, { Component } from 'react'
import { Row, Container, Col, Input, Button } from 'reactstrap';
import './footer.css';
export default class Footer extends Component {
    render() {
        return (
            <div className = "footer-container-global">
                <div style ={{margin:0}} id="footer-container-content">     
                        <div className="footer-item">
                            <div id="footer-logo">
                                <img src="https://s3.amazonaws.com/fpts-images/fpts_logo.png" alt="" />
                            </div>
                            {/* <div style = {{textAlign:'center', fontSize:'20px' }}>
                                <a href="https://www.facebook.com/PropertyTaxReductions/"><i className="fab fa-facebook-f"></i></a>
                            </div> */}
                        </div>    
                     <div className="footer-item" xs='4' md="2" lg="4">
                        <h1 className='footer-header'>Resources</h1>
                        <p>
                            <a href="/resources"> Helpful Links</a>
                        </p>
                    </div>
                        <div className="footer-item" >
                            <h1 className='footer-header'>Services</h1>
                        <a href="/real_estate_property">
                            <p>Real Estate</p>
                        </a>
                        <a href="/tangible_personal_property">
                            <p>
                                Tangible Personal Property
                            </p>
                        </a>
                        </div>
                       <div className = "footer-item">
                            <h1 className='footer-header'>Pricing</h1>
                            <p style ={{margin:0}}>
                            <a href="/service_fees">
                                Price Guide
                            </a>
                            <a>

                            </a>
                            </p>
                        </div>
                      
                    
                        <div className = "footer-item">
                            <p style = {{textAlign:'right'}}>Contact Us <br/><span style = {{color:'orange'}}>7750 SW 117 Ave Suite 302 <br/>
                            Miami, FL 33183 <br/>
                            350-441-0500</span>
                            </p>
                        </div>
                    </div>
                <div className = "footer-ad-space">
                    <p style ={{marginBottom:0}}>
                    Developed by {' '}
                    <a href ="http://captaincode.cc"> 
                         Captain Code
                    </a>
                    </p>
                
            </div>
            </div>
        );
    }
}