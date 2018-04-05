import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Components/Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: "Alex", age: '17'},
      {name: "Alex2", age: '127'},
      {name: "Alex3", age: '137'},
      {name: "Alex5", age: '147'},
    ]
  }

  switchNameHandler = () => {
    console.log('switch name');
    console.log(this.state);
  }

  render() {

    const peopleList = this.state.persons.map((person, i) => {
      return (
        <div key={i}>
          <Person name={person.name} age={person.age}></Person>
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
        {this.state.persons.map((person, i) => {
          return (
            <div key={i}>
              <Person name={person.name} age={person.age}></Person>
              <button onClick={this.switchNameHandler}>switch Name</button>
            </div>            
          );
        })}
      </div>
    );
  }
}

export default App;
