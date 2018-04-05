import React from 'react';
import Button from './../Button/Button';
import './Person.css'


const person = (props) => {
  return  <div className="Person" onClick={props.click}>
            <h2>Profile Card</h2>
            <h3>Name: {props.name}</h3>
            <h3>Age: {props.age}</h3>
            <p>{props.children}</p>
            <div>
              <label for="name">Name</label>
              <input id="name" onChange={(e) => props.onNameChangedHandler(e, props.id)} placeholder={props.name}/>
            </div>
            <div>
              <label for="age">Age</label>
              <input id="age" onChange={(e) => props.onAgeChangedHandler(e, props.id)} placeholder={props.age}/>
            </div>

            <Button click={props.updatePersonHandler}>Update</Button>

          </div>
};

export default person;