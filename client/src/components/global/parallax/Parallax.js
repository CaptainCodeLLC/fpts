import React from 'react';
import './parallax.css'

const Parallax = props => {
  const xOffset = props.topOffset
  return (
    
    <div className="parallax-window" data-z-index= "0"data-parallax="scroll" data-image-src={props.src}>
      <div className = "parallax-text-container">
        <p style = {{top:xOffset}} className = "parallax-header">
            {props.text}
        </p>
        <p style = {{top:xOffset}} className = "parallax-caption">
          {props.caption}
        </p>
      </div>
    </div>

    )
  }

export default Parallax;
