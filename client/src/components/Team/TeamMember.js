import React, { Component } from 'react';
import {Card, CardImg, CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap';
import './team.css'
import { isThisSecond } from 'date-fns';
export default class TeamMember extends Component {
    constructor(props){
        super(props);
        this.state = {
          isExpanded:false
        };
      }

      handleToggle(e){
          e.preventDefault();
          this.setState({
              isExpanded:!this.state.isExpanded
          });
      }
   

  render() {
      const {isExpanded} = this.state;
    return (
      <div >
         <Card  style ={{marginBottom:'15px'}}>
            <CardImg  style ={{height:'10%'}} src={this.props.image} alt="Card image cap" />
            <CardBody style = {{textAlign:'center'}}>
                <CardTitle>{this.props.name}</CardTitle>
                <CardSubtitle style ={{marginBottom:10}}>{this.props.role}</CardSubtitle>
                <CardSubtitle style ={{marginRight:10}}>{this.props.role2}</CardSubtitle>
                <br/>
                 

               
                <CardSubtitle>
                    <p className ={`team-bio${isExpanded ?'-is-expanded':''}`}>{this.props.bio}</p>
                </CardSubtitle>
                <Button color="success" onClick = {(e)=> this.handleToggle(e)} >More Info</Button>
            </CardBody>
        </Card>
      </div>
    )
  }
}
