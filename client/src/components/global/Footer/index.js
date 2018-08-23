import React, { Component } from 'react';
import './footer.css';
export default class Footer extends Component {

    
    render() {
        // console.log(window.innerWidth);
        // var footerStyle = 'desktop';
        
        
        // function isMobile(){
        //     if(window.innerWidth <= 750){
        //         footerStyle= 'mobile';
        //     }
        // }
        
        return (
            <div className = "footer-container-global">
                <div style ={{margin:0}} id="footer-container-content">     
                    <div className = "footer-item">
                    <div id="footer-logo">
                        <a href="/">
                            <img src="https://s3.amazonaws.com/fpts-images/fpts_logo.png" alt="" />
                        </a>
                    </div>
                        <div style = {{marginTop: '3px',textAlign:'center', fontSize:'25px'}}>
                            <a href="https://www.facebook.com/PropertyTaxReductions/"><i className="fab fa-facebook-f" style = {{marginRight:'20px'}}></i></a>
                            <a href="https://twitter.com/reduceproptaxes"><i className="fab fa-twitter"></i></a>
                        </div>
                    </div>  
                     <div className="footer-item">
                        <h1 className='footer-header'>Resources</h1>
                        <p>
                            <a href="/resources"> Helpful Links</a>
                        </p>
                    </div>
                        <div className="footer-item" >
                            <h1 className='footer-header'>Services</h1>
                        <a href="/services/real-estate">
                            <p className="footer-list-item">Real Estate</p>
                        </a>
                        <a href="/services/tangible-personal-property">
                            <p>
                                Tangible Personal Property
                            </p>
                        </a>
                        </div>
                       <div className = "footer-item">
                            <h1 className='footer-header'>Pricing</h1>
                            <p className = "footer-list-item">
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
                            305-441-0500</span>
                            </p>
                        </div>
                    </div>
                <div className = "footer-ad-space">
                    <p style ={{marginBottom:0}}>
                    Developed by {' '}
                    <a href ="http://www.captaincode.cc"> 
                         Captain Code
                    </a>
                    </p>
                </div>
            </div>
        );
    }
}