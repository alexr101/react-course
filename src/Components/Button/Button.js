import React from 'react';
import './Button.css';

const Button = (props) => {
  return (
    <button className="btn-1" onClick={props.click}>{props.children}</button>
  )
}

export default Button;