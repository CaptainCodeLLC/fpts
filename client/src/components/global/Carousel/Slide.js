import React from 'react';
import axios from 'axios';
import {Input, Button} from  'reactstrap'

export default class Slide extends React.Component {

  state = {
    emailAddress: '',
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
  }


  render(){
    return(
      <div className = "slide-container">
          <header className = "overlay"/>
          <div className = "carousel-img">
              <img src = {this.props.img}/>
              <div id = "text-container">
                  <div>
                    <h1>Florida Property Tax Service</h1>
                  </div>
              </div>
              <div id = "text-container">
                  <div>
                    <p>Saving our clients millions annually</p>
                  </div>
                  <Input type='email'
                    name="emailAddress"
                    value={this.state.emailAddress}
                    onChange={e => this.handleChange(e)}
                    placeholder =  "Join our newsletter"/>
                  <Button color = "warning">Submit</Button>
                </div>

          </div>

      </div>
    )

  }
}
