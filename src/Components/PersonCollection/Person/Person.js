import React, {Component} from 'react';
import Button from '../../Button/Button';
import classes from './Person.css';
import PropTypes from 'prop-types';

class Person extends Component {
  constructor(props) {
      super(props)
      // console.log('[Person.js] inside contructor', props );
      this.inputElement = React.createRef();
  }

  // componentWillMount() {
  //     console.log('[Person.js] inside componentWillMount');
  // }

  componentDidMount() {
      console.log('[Person.js] inside componentDidMount');
      if(this.props.position === 0) 
        this.inputElement.current.focus();
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
                <input 
                  ref = {this.inputElement} // this references Person class
                  id="name" 
                  onChange={(e) => this.props.onNameChangedHandler(e, this.props.id)} 
                  placeholder={this.props.name}/>
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

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  children: PropTypes.object,
  onNameChangedHandler: PropTypes.func,
  onAgeChangedHandler: PropTypes.func,
  removePerson: PropTypes.func,
}


export default Person;