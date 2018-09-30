import React, {Component} from 'react';
import ErrorBoundary from '../../ErrorBoundary/ErrorBoundary';
import Person from './Person/Person';

class PersonCollection extends Component {
    constructor(props) {
        super(props)
        console.log('[PersonCollection.js] inside contructor', props );
    }
    
    componentWillMount() {
        console.log('[PersonCollection.js] inside componentWillMount');
    }
    
    componentDidMount() {
        console.log('[PersonCollection.js] inside componentDidMount');
    }
    render() {
        console.log('[PersonCollection.js] inside render');

        return this.props.people.map((person, i) => {
            return (
              // <ErrorBoundary key={i}>
                <Person  
                key={i}
                  id = {i}
                  name={person.name} 
                  age={person.age}
                  onNameChangedHandler = {this.props.onNameChangedHandler}
                  onAgeChangedHandler = {this.props.onAgeChangedHandler}
                  updatePersonHandler = {this.props.updatePersonHandler}
                  removePerson = {this.props.removePerson}
                  ></Person>
              //   </ErrorBoundary>   
            );
          })
    }
}

export default PersonCollection;