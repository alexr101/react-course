import React from 'react';

const person = (props) => {
  return  <div>
            <h3>Person = {props.name} Age: {props.age}</h3>
            <p>{props.children}</p>
          </div>
};

export default person;