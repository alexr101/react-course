import React from 'react';
import './Person.css'

const person = (props) => {
  return  <div className="Person" onClick={props.click}>
            <h3>Person = {props.name} Age: {props.age}</h3>
            <p>{props.children}</p>
            <label for="name">Name</label>
            <input id="name" onChange={(e) => props.onNameChangedHandler(e, props.id)} placeholder={props.name}/>
            <label for="age">Age</label>
            <input id="age" onChange={(e) => props.onAgeChangedHandler(e, props.id)} placeholder={props.age}/>
          </div>
};

export default person;