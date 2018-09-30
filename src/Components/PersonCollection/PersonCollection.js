import React from 'react';
import ErrorBoundary from '../../ErrorBoundary/ErrorBoundary';
import Person from './Person/Person';

const PersonCollection = (props) => {
    // const rnd = Math.random();
    // if(rnd > .7) {
    //   throw new Error('something went wrong');
    // }
    console.log(props)
    return props.people.map((person, i) => {
      return (
        // <ErrorBoundary key={i}>
          <Person  
          key={i}
            id = {i}
            name={person.name} 
            age={person.age}
            onNameChangedHandler = {props.onNameChangedHandler}
            onAgeChangedHandler = {props.onAgeChangedHandler}
            updatePersonHandler = {props.updatePersonHandler}
            removePerson = {props.removePerson}
            ></Person>
        //   </ErrorBoundary>   
      );
    })
}

export default PersonCollection;