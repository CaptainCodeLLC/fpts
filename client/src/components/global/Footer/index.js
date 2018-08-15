import React, { Component } from 'react';
import {Container} from 'reactstrap';
import './footer.css'
export default class Footer extends Component {
  render() {
    return (
      <div className = "footer-container">
        <div className="footer-item">
          <div id="footer-logo">
          </div>

          <div id="footer-address">
            <strong>Florida Property Tax Service</strong><br/>
            7750 SW 117 Ave.<br/>
            Suite 302<br/>
            Miami, FL 33183
          </div>
        </div>

        <div id ="footer-other" className="footer-item">
        <span>© 2018 Florida Property Tax Service.
        All Rights reserved.<br/>
        <a href="">Privacy Policy</a><br/>
        Site design by <a href="">CaptainCode</a></span>
        </div>
      </div>
    )
  }
}
