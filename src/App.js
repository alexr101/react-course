import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Components/Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Howdy</h1>
        <Person name="Alex" age="17"/>
        <Person name="Alex1" age="127"/>
        <Person name="Alex2" age="117"/>
        <Person name="Alex3" age="147"/>
      </div>
    );
  }
}

export default App;
