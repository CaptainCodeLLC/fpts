import React, { Component } from 'react';
import {Card, CardImg, CardBody, CardTitle, CardSubtitle, ButtonDropdown,DropdownToggle, DropdownMenu,DropdownItem} from 'reactstrap';

export default class TeamMember extends Component {
    constructor(props){
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
          dropDownOpen:false
        };
      }

      toggle(){
          this.setState({
              dropDownOpen:!this.state.dropDownOpen
          });
      }

  render() {
    return (
      <div>
         <Card style ={{marginBottom:'15px'}}>
            <CardImg style ={{height:'10%'}}top  src={this.props.image} alt="Card image cap" />
            <CardBody style = {{textAlign:'center'}}>
                <CardTitle>{this.props.name}</CardTitle>
                <CardSubtitle style ={{marginBottom:10}}>{this.props.role}</CardSubtitle>
                <CardSubtitle style ={{marginRight:10}}>{this.props.role2}</CardSubtitle>
                  <ButtonDropdown  isOpen={this.state.dropDownOpen} onClick={this.toggle}>

                <DropdownToggle style = {{ borderRadius:50, marginTop:'10px'}}caret color = "success">
                Learn more
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem header>
                        {this.props.bio}
                    </DropdownItem>

                </DropdownMenu>
                </ButtonDropdown>
            </CardBody>
        </Card>
      </div>
    )
  }
}
