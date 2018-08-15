import React from 'react';
import { Button,
  Col,
  Container,
  Input,
  Modal,
   ModalHeader,
   ModalBody,
   ModalFooter,
   Row
} from 'reactstrap';

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <Button color="warning" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Florida Property Tax Service Newsletter</ModalHeader>
          <ModalBody>
            <Row className = "modal-row">
              <Col>
                <Input placeholder="First name*"/>
              </Col>
              <Col>
                <Input placeholder="Last name*"/>
              </Col>
            </Row>
            <Row className = "modal-row">
              <Col>
                <Input placeholder = "Email Address*"/>
              </Col>
            </Row>
            <Row>
              <Col>
                <Input placeholder = "Company name"/>
              </Col>
            </Row>
          </ModalBody>
          <ModalFooter>
            <Container>
            <Row>
              <Col lg = "7" stlye = {{fontSize:'2pt', marginRight:'100%'}}>* is required</Col>
              <Col  style = {{marginRight:'5px'}} lg = "2">
                <Button color="success" onClick={this.toggle}>Submit</Button>{' '}
              </Col>
              <Col style = {{marginRight:'5px'}} lg = "2">
                <Button color="danger" onClick={this.toggle}>Cancel</Button>
              </Col>
            </Row>
            </Container>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;