import React, { Component } from 'react';
import {Container,Row} from 'reactstrap';
import './footer.css'
export default class Footer extends Component {
  render() {
    return (
      <div className = "footer-container">
   
          <div className="footer-item">
            <div id="footer-logo">

             <img src="https://s3.amazonaws.com/fpts-images/fpts_logo.png" alt=""/>
            </div>

            <div id="footer-address">
              
              7750 SW 117 Ave.<br/>
              Suite 302<br/>
              Miami, FL 33183
            </div>
          </div>

          <div id ="footer-other" className="footer-item">
          <span>© 2018 Florida Property Tax Service.
          All Rights reserved.<br/>
          <a href="">Privacy Policy</a><br/>
          Site design by <a href="http://www.captaincode.cc">Captain Code</a></span>
          </div>
         

      </div>
    )
  }
}
