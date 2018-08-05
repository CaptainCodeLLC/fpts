import React from 'react';
import {Nav, NavLink, Row, Col,Container, Navbar,NavbarBrand} from 'reactstrap';


class Navigation extends React.PureComponent {
constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render(){
  return (
    <Navbar className ="navbar navbar-expand-sm fixed-top navbar-light">
       <Container>
        <Row>
        <Col lg = "4">
        <NavbarBrand style = {{float:'left'}}href="/">
          <img style = {{width:'100%'}} src = "https://s3.amazonaws.com/fpts-images/fpts_logo.png"/>
        </NavbarBrand>
        </Col>
     
        <Col className = 'link-container' lg = "3">
          <NavLink  href="/resources">Resources</NavLink>
        </Col>
        <Col className = "link-container" lg = "3">
        <NavLink className= "nav-link" href="#">(305) 441-0500 <i className="fas fa-phone"></i></NavLink>
        </Col>

        <NavLink className = "nav-link" href="#">Email us</NavLink>
        <NavLink className = "nav-link" href="#">Link</NavLink>
              </Row>
      </Container>
    </Navbar>
  )
  }
}

export default Navigation;