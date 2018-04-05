import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Components/Person/Person';
import Button from './Components/Button/Button';

class App extends Component {
  state = {
    people: [
      {name: "Alex", age: '17'},
      {name: "Alex2", age: '127'},
      {name: "Alex3", age: '137'},
      {name: "Alex5", age: '147'},
      {name: "Alex", age: '17'},
      {name: "Alex2", age: '127'},
      {name: "Alex3", age: '137'},
      {name: "Alex5", age: '147'},
    ],
    updates: {
      editedPeople: []
    },
    showPeople: false
  }

  updatePersonHandler = () => {
    var people = this.state.people;
    this.state.updates.editedPeople.map((updatedPerson, i) => {
      people[i] = updatedPerson;
    })

    this.setState({
      people: people
    });
  }

  onNameChangedHandler = (e, id) => {
    var editedPeople = this.state.updates.editedPeople.slice();
    var people = this.state.people.slice();

    var unsavedPerson = Object.assign( {}, editedPeople[id] );
    var updatedPerson;
    const unsavedPersonExists = Object.keys(unsavedPerson).length === 0 && unsavedPerson.constructor === Object


    if(unsavedPersonExists){
      updatedPerson = Object.assign( {}, people[id] );
      console.log('person not saved');
    } else 
      updatedPerson = Object.assign( {}, unsavedPerson );

    console.log(unsavedPerson)

    updatedPerson.name = e.target.value;
    editedPeople[id] = updatedPerson;
    console.log(editedPeople)
    this.setState({
      updates: {
        editedPeople: editedPeople
      } 
    })
  }

  onAgeChangedHandler = (e, id) => {
    var editedPeople = this.state.updates.editedPeople.slice();
    var people = this.state.people.slice();

    var unsavedPerson = Object.assign( {}, editedPeople[id] );
    var updatedPerson;
    const unsavedPersonExists = Object.keys(unsavedPerson).length === 0 && unsavedPerson.constructor === Object

    if(unsavedPersonExists)  {
      updatedPerson = Object.assign( {}, people[id] );
    } else 
      updatedPerson = Object.assign( {}, unsavedPerson );

    updatedPerson.age = e.target.value;
    editedPeople[id] = updatedPerson;

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
            ></Person>   
        );
      })
    }

    return (
      <div className="App">
        <h1>All the People</h1>
        <Button click={this.togglePeopleList}>Show People</Button>
        {peopleList}
      </div>
    );
  }
}

export default App;
