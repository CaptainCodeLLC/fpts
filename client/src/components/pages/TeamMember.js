import React, { Component } from '../../../../../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react/../../../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react';
import {Card, CardImg, CardBody, CardTitle, CardSubtitle, ButtonDropdown,DropdownToggle, DropdownMenu,DropdownItem} from '../../../../../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/reactstrap./../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/reactstrap';

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
         <Card>
            <CardImg top width="100%" height="120%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97318&w=318&h=318" alt="Card image cap" />
            <CardBody>
                <CardTitle>{this.props.name}</CardTitle>
                <CardSubtitle>{this.props.role}
                <ButtonDropdown  isOpen={this.state.dropDownOpen} onClick={this.toggle}>
                <DropdownToggle style = {{marginLeft:50, borderRadius:50, marginTop:'10px'}}caret color = "success">
                Learn more
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem header>
                        {this.props.bio}
                    </DropdownItem>
                    
                </DropdownMenu>
                </ButtonDropdown>
                </CardSubtitle>
            </CardBody>
        </Card>
      </div>
    )
  }
}
