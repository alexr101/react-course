import React from 'react';
import Button from './../Button/Button';
import './Person.css'


const person = (props) => {
  return  <div className="Person" onClick={props.click}>
            <h2>Profile Card</h2>
            <h3>Name: {props.name}</h3>
            <h3>Age: {props.age}</h3>
            <p>{props.children}</p>
            <div className="form-inputs">
              <label htmlFor="name">Name</label>
              <input id="name" onChange={(e) => props.onNameChangedHandler(e, props.id)} placeholder={props.name}/>
            </div>
            <div className="form-inputs">
              <label htmlFor="age">Age</label>
              <input id="age" onChange={(e) => props.onAgeChangedHandler(e, props.id)} placeholder={props.age}/>
            </div>

            <Button click={props.updatePersonHandler}>Update</Button>
            <Button click={() => props.removePerson(props.id)} classes="red-btn">Remove</Button>

          </div>
};

export default person;