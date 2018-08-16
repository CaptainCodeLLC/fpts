import React, { Component } from 'react';
import {Container,Row} from 'reactstrap';
import './footer.css'
export default class Footer extends Component {
  render() {
    return (
      <footer className = "footer-container">
   
          <div className="footer-item">
            <div id="footer-logo">

             <img src="https://s3.amazonaws.com/fpts-images/fpts_logo.png" alt=""/>
            </div>

            <div id="footer-address">
              
              7750 SW 117 Ave.<br/>
              Suite 302<br/>
              Miami, FL 33183 <br/>
              305-441-0500
            </div>
          </div>
          <div className="footer-item">
            <p1 className = "footer-header">Resources</p1>
            <p>
              <a href = "/resources"> Helpful Links</a>
            </p>
          </div>
          <div className="footer-item">
            <p1 className = "footer-header">Services</p1>
              <br/>
              <a href="/real_estate_property">
                Real Estate
              </a>
              <br/>
            
            
              <a href="/tangible_personal_property">
                Tangible Personal Property
              </a>
            

          </div>
          
          <div className="footer-item">
            <p1 className = "footer-header">Pricing</p1>
              <p>
                <a href="fees">
                  Fees
                </a>
              </p>
          </div>

          <div id ="footer-other" className="footer-item">
          <span>© 2018 Florida Property Tax Service.
          All Rights reserved.<br/>
          <a href="">Privacy Policy</a><br/>
          Site design by <a href="http://www.captaincode.cc">Captain Code</a></span>
          </div>
         

      </footer>
    )
  }
}
