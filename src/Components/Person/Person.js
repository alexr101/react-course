import React from 'react';

const person = (props) => {
  return  <div>
            <h1>Person = {props.name} Age: {props.age}</h1>
          </div>
};

export default person;