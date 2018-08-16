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
                        </div>    
                     <div className="footer-item" xs='4' md="2" lg="4">
                        <h1 className='footer-header'>Resources</h1>
                        <p>
                            <a href="/resources"> Helpful Links</a>
                        </p>
                    </div>
                        <div className="footer-item" >
                            <h1 className='footer-header'>Business</h1>
                       </div>
                       <div className = "footer-item">
                            <h1 className='footer-header'>Press</h1>
                            <p style ={{margin:0}}>
                            <a href="/style_guide">
                                    Style guide
                            </a>
                            </p>
                            <a href="https://www.facebook.com/captaincodeservice/">
                             
                                    Facebook
               
                            </a>
                        </div>
                      
                    
                        <div className = "footer-item">
                            <h1>SWAG</h1>
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