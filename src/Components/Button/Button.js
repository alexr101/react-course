import React from 'react';
import classes from './Button.css';

const getBtnClass = (btnType) => {
  var btnClass = classes.btn;

  if(btnType == 'red') btnClass += ' ' + classes.redBtn;
  
  return btnClass;
}

const Button = (props) => {
  
  var btnClass = getBtnClass(props.buttonType);

  return (
    <button className={btnClass} onClick={props.click}>{props.children}</button>
  )
}

export default Button;