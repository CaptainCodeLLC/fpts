import React from 'react';
<<<<<<< HEAD
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
              <div className = "text-container">
                  <div>
                    <h1>Florida Property Tax Service</h1>
                  </div>
              </div>
              <div className = "text-container">
                  <div>
                    <p>Saving our clients millions annually</p>
                  </div>
                  <Input type='email'
                    name="emailAddress"
                    value={this.state.emailAddress}
                    onChange={e => this.handleChange(e)}
                    placeholder =  "Email address for our newsletter"/>
                  <Button color = "warning">Submit</Button>
                </div>

          </div>

      </div>
    )

  }
}
=======
import {Container,Row,Col , Input} from  'reactstrap'
const Slide = props => (
    <div className = "slide-container">
        <header className = "overlay"/>
        <div className = "carousel-img">
            <img src = {props.img}/>
            <Container className = "text-container">
                <Row>
                    <Col sm = {{size:12}} md = {{offset:4}} lg={{ offset:5 }}>
                            <h1>Florida Property Tax Service</h1>
                    </Col>
                </Row>
              
            </Container>
            <Container className = "text-container">
                <Row>
                    <Col sm = {{size:12}} lg={{ offset:5 }}>
                            <h2>Saving our clients millions annually</h2>
                    </Col>
                </Row>
              
            </Container>
        </div>
    
    </div>
)

export default Slide;
>>>>>>> 512a7c6c1755c0619ae4930ab2c467a34ce4173a
