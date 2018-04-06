import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
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
    var people = this.state.people.slice();
    people.map(person => {
      
    })
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
    var unsavedPerson = {...editedPeople[id]};
    const previousEditsExist = Object.keys(unsavedPerson).length !== 0 && unsavedPerson.constructor === Object

    if(previousEditsExist) {
      unsavedPerson  = {...people.find( person => person.id === id)}
    }
    unsavedPerson.name = e.target.value;
    editedPeople[id] = unsavedPerson;
    // editedPeople[id] = unsavedPerson;

    this.setState({
      updates: {
        editedPeople: editedPeople
      } 
    })
  }

  onAgeChangedHandler = (e, id) => {
    var editedPeople = this.state.updates.editedPeople.slice();
    var people = this.state.people.slice();
    var unsavedPerson = {...editedPeople[id]};

    const previousEditsExist = Object.keys(unsavedPerson).length !== 0 && unsavedPerson.constructor === Object
    if(previousEditsExist)  {
      unsavedPerson = {...people.find( person => person.id === id)};
    }

    unsavedPerson.age = e.target.value;
    editedPeople[id] = unsavedPerson;
    console.log(editedPeople);
    console.log(unsavedPerson)
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
    var updatedPeople = this.state.updates.editedPeople
    people.splice(id, 1);
    this.setState({ people: people });
  }

  render() {
    var peopleList;

    if(this.state.showPeople) {
      peopleList = this.state.people.map((person, i) => {
        return (
          <Person key={i} 
            id = {person.id}
            name={person.name} 
            age={person.age}
            onNameChangedHandler = {this.onNameChangedHandler}
            onAgeChangedHandler = {this.onAgeChangedHandler}
            updatePersonHandler = {this.updatePersonHandler}
            removePerson = {this.removePerson}
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
