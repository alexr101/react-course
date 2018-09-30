import React, {Component} from 'react';
import Button from '../../Button/Button';
import classes from './Person.css'

class Person extends Component {
  constructor(props) {
      super(props)
      console.log('[Person.js] inside contructor', props );
  }

  componentWillMount() {
      console.log('[Person.js] inside componentWillMount');
  }

  componentDidMount() {
      console.log('[Person.js] inside componentDidMount');
  }
  render() {
    console.log('[Person.js] inside render');

    return  <div className={classes.Person} onClick={this.props.click}>
              <h2>Profile Card</h2>
              <h3>Name: {this.props.name}</h3>
              <h3>Age: {this.props.age}</h3>
              <p>{this.props.children}</p>
              <div className={classes.formInputs}>
                <label htmlFor="name">Name</label>
                <input id="name" onChange={(e) => this.props.onNameChangedHandler(e, this.props.id)} placeholder={this.props.name}/>
              </div>
              <div className={classes.formInputs}>
                <label htmlFor="age">Age</label>
                <input id="age" onChange={(e) => this.props.onAgeChangedHandler(e, this.props.id)} placeholder={this.props.age}/>
              </div>
              <Button click={this.props.updatePersonHandler}>Update</Button>
              <Button click={() => this.props.removePerson(this.props.id)} buttonType="red">Remove</Button>
            </div>
  }
}


export default Person;