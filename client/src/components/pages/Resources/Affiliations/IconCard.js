import React from 'react';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';
import './icon.css';
const IconCard = (props) => {
  return (
    <div>
      <Card  className = "card-img-border" inverse>
        <CardImg className = "card-img-border" src={props.img} alt="Card image cap" />
        <CardImgOverlay>
          <div id = "affiliate-text-container">
            <CardTitle style = {{textAlign:'center'}}>
              <h4>{props.title}</h4>
            </CardTitle>
            <CardText style = {{textAlign:'center'}}>
              <p2>
                {props.description}
              </p2>
            </CardText>
          </div>
        </CardImgOverlay>
      </Card>
    </div>
  );
};

export default IconCard;
