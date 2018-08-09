import React from 'react';
import PropTypes from 'prop-types';
import './parallax.css'

const Parallax = props => {
    return (
    <div className="parallax-window" data-z-index= "1"data-parallax="scroll" data-image-src={props.src}>
      <div className = "parallax-text-container">
        <p className = "parallax-text">
            {props.text}
        </p>
      </div>
    </div>

    )
  }

export default Parallax;
