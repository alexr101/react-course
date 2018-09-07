import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Radium from 'radium';
import Person from './Components/Person/Person';
import Button from './Components/Button/Button';

class App extends Component {
  state = {
    people: [
      {id: 1, name: "Alex", age: '17'},
      {id: 2, name: "Alex2", age: '127'},
      {id: 3, name: "Alex3", age: '137'},
      {id: 4, name: "Alex5", age: '147'},
      {id: 5, name: "Alex7", age: '187'},
      {id: 6, name: "Alex2", age: '1827'},
      {id: 7, name: "Alex3", age: '13867'},
      {id: 8, name: "Alex5", age: '1647'},
    ],
    updates: {
      editedPeople: []
    },
    showPeople: false
  }

  updatePersonHandler = () => {
    var people = [...this.state.people];
    this.state.updates.editedPeople.map((updatedPerson, i) => {
      return people[i] = updatedPerson;
    })

    this.setState({
      people: people
    });
  }

  // The person could be in the editedPeople list if it hasn't been saved and we're still changing other
  // or people. This matters because we want to make sure we pick the copy with the other property updates if necessary
  getPersonToEdit = (id) => {
    var editedPeople = [...this.state.updates.editedPeople];
    var people = [...this.state.people];

    var person = { ...editedPeople[id]};
    const personNotInEditMode = Object.keys(person).length === 0 && person.constructor === Object
    if(personNotInEditMode) 
      person = {...people[id]};
    
    return person;
  }

  onNameChangedHandler = (e, id) => {
    var person = this.getPersonToEdit(id);

    person.name = e.target.value;
    var editedPeople = [...this.state.updates.editedPeople];
    editedPeople[id] = person;

    this.setState({
      updates: {
        editedPeople: editedPeople
      } 
    })
  }

  // In short update the person in "updatePeople" array
  onAgeChangedHandler = (e, id) => {
    var person = this.getPersonToEdit(id);
    console.log(person);
    
    person.age = e.target.value;
    var editedPeople = [...this.state.updates.editedPeople];
    editedPeople[id] = person;
    
    this.setState({
      updates: {
        editedPeople: editedPeople
      } 
    })
  }

  togglePeopleList = () => {
    var showPeople = this.state.showPeople;
    this.setState({ showPeople: !showPeople });
  }

  removePerson = (id) => {
    var people = this.state.people.slice();
    people.splice(id, 1);
    this.setState({ people: people });
  }

  render() {
    var peopleList;

    if(this.state.showPeople) {
      peopleList = this.state.people.map((person, i) => {
        return (
          <Person key={i} 
            id = {i}
            name={person.name} 
            age={person.age}
            onNameChangedHandler = {this.onNameChangedHandler}
            onAgeChangedHandler = {this.onAgeChangedHandler}
            updatePersonHandler = {this.updatePersonHandler}
            removePerson = {this.removePerson}
            ></Person>   
        );
      })

      var headerStyle = {
        fontWeight: 'bold',
        color: 'red',
        ':hover': {
          color: 'black'
        }
      };
    }



    return (
      <div className="App">
        <h1 style={headerStyle}>All the People</h1>
        <Button click={this.togglePeopleList}>Show People</Button>
        {peopleList}
      </div>
    );
  }
}

export default Radium(App);
