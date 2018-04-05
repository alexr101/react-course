import React from 'react';
import './Person.css'

const person = (props) => {
  return  <div className="Person" onClick={props.click}>
            <h3>Person = {props.name} Age: {props.age}</h3>
            <p>{props.children}</p>
            <input onChange={(e) => props.onNameChangedHandler(e, props.id)} placeholder={props.name}/>
          </div>
};

export default person;