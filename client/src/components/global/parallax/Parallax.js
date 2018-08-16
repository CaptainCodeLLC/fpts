import React from 'react';
import './parallax.css'

const Parallax = props => {
    return (
    <div className="parallax-window" data-z-index= "1"data-parallax="scroll" data-image-src={props.src}>
      <div className = "parallax-text-container">
        <p className = "parallax-header">
            {props.text}
        </p>
        <p className = "parallax-caption">
          {props.caption}
        </p>
      </div>
    </div>

    )
  }

export default Parallax;
