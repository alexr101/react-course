import React, { PureComponent } from 'react';
// import classes from './App.css';
import Button from '../Components/Button/Button';

import Cockpit from '../Components/Cockpit/Cockpit';
import PersonCollection from '../Components/PersonCollection/PersonCollection';
import Aux from '../HOC/Aux';

export const AuthContext = React.createContext(false);

class App extends PureComponent {

  constructor(props) {
    super(props)
    console.log('[App.js] inside contructor', props );
    this.state = {
      people: [
        {id: 1, name: "Alex", age: 17},
        {id: 2, name: "Alex2", age: 127},
        {id: 3, name: "Alex3", age: 137},
        {id: 4, name: "Alex5", age: 147},
        {id: 5, name: "Alex7", age: 187},
        {id: 6, name: "Alex2", age: 1827},
        {id: 7, name: "Alex3", age: 13867},
        {id: 8, name: "Alex5", age: 1647},
      ],
      updates: {
        editedPeople: []
      },
      showPeople: false,
      toggleClicked: 0,
      isAuthenticated: false
    }
  }
  
  componentWillMount() {
    console.log('[App.js] inside componentWillMount');
  }

  componentDidMount() {
    console.log('[App.js] inside componentDidMount');
  }

  // shouldComponentUpdate (nextProps, nextState){
  //   console.log('[App.js] inside componentWillReceiveProps', nextProps, nextState);
  //   return true;
  // }

  componentWillUpdate(nextProps, nextState) {
      console.log('[App.js] inside componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate() {
      console.log('[App.js] inside componentDidUpdate');
  }

  updatePersonHandler = () => {
    var people = [...this.state.people];
    this.state.updates.editedPeople.map((updatedPerson, i) => {
      if(updatedPerson)
        people[i] = updatedPerson;
      return '';
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
    console.log(this.state);

    var person = this.getPersonToEdit(id);

    person.name = e.target.value;
    var editedPeople = [...this.state.updates.editedPeople];
    editedPeople[id] = person;

    this.setState({
      updates: {
        editedPeople: editedPeople
      } 
    })
    console.log(this.state);
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
    const showPeople = this.state.showPeople;
    this.setState((prevState, props)=> {
      return { 
        showPeople: !showPeople,
        toggleClicked: prevState.toggleClicked + 1
      }
    });
  }

  removePerson = (id) => {
    var people = this.state.people.slice();
    people.splice(id, 1);
    this.setState({ people: people });
  }

  authenticateUser = () => {
    var isAuthenticated = this.state.isAuthenticated;
    console.log(isAuthenticated)
    this.setState({
      isAuthenticated: !isAuthenticated
    })
  }

  render() {
    console.log('[App.js] inside render()');
    var peopleCollection;
    var headerStyle = {
      fontWeight: 'bold',
    };

    if(this.state.showPeople) {
      peopleCollection = <PersonCollection 
        people={this.state.people}
        onNameChangedHandler = {this.onNameChangedHandler}
        onAgeChangedHandler = {this.onAgeChangedHandler}
        updatePersonHandler = {this.updatePersonHandler}
        removePerson = {this.removePerson}
        />
      headerStyle.color = 'red'
    }

    return (
      <Aux>
        <Cockpit
          appTitle = {this.props.appTitle}
          headerStyle = {headerStyle}
          toggleClicked = {this.state.toggleClicked}
          togglePeopleList = {this.togglePeopleList}></Cockpit>
        <Button click={this.authenticateUser}>{this.state.isAuthenticated ? 'Logout' : 'Login'}</Button>
        
        <AuthContext.Provider value={this.state.isAuthenticated}>
          {peopleCollection}
        </AuthContext.Provider>
      </Aux>
    );
  }
}

export default App;
