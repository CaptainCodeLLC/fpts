import React from 'react';
import Modal from './modal';

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
              <img alt = "" src = {this.props.img}/>
              <div id = "text-container">
                  <div>
                    <h1 id = "splash-text">Florida Property Tax Service</h1>
                  </div>
              </div>
              <div id = "text-container">
                  <div>
                    <p>Saving Millions for Our Clients Every Year</p>
                  </div>
                  <Modal style = {{zIndex:"5!important"}} buttonLabel = "Join our newsletter" className = "modal"/>
                </div>

          </div>

      </div>
    )

  }
}
