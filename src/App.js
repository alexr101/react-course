import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Components/Person/Person';

class App extends Component {
  state = {
    people: [
      {name: "Alex", age: '17'},
      {name: "Alex2", age: '127'},
      {name: "Alex3", age: '137'},
      {name: "Alex5", age: '147'},
    ],
    updates: {
      editedPeople: []
    }
  }

  switchNameHandler = () => {
    var people = this.state.people;
    this.state.edits.editedPeople.map((updatedPerson, i) => {
      people[i] = updatedPerson;
    })

    this.setState({
      people: people
    });
  }

  onNameChangedHandler = (e, id) => {
    var editedPeople = this.state.updates.editedPeople.slice();
    var people = this.state.people.slice();

    var updatedPerson = Object.assign( {}, people[id] );
    
    updatedPerson.name = e.target.value;
    editedPeople[id] = updatedPerson;

    this.setState({
      edits: {
        editedPeople: editedPeople
      } 
    })
  }

  render() {

    const peopleList = this.state.people.map((person, i) => {
      return (
        <div key={i}>
          <Person 
            id = {i}
            name={person.name} 
            age={person.age}
            onNameChangedHandler = {this.onNameChangedHandler}
            ></Person>
          <button onClick={this.switchNameHandler}>Switch Name</button>
        </div>
        
      );
    })
    return (
      <div className="App">
        <h1>Howdy</h1>
        <h4>List through var</h4>
        {peopleList}
        <h4>List by direct rendering in return</h4>
        {this.state.people.map((person, i) => {
          return (
            <div key={i}>
              <Person 
                id={i}
                name={person.name} 
                age={person.age}
                onNameChangedHandler = {this.onNameChangedHandler}></Person>              
              <button onClick={this.switchNameHandler}>switch Name</button>
            </div>            
          );
        })}
      </div>
    );
  }
}

export default App;
