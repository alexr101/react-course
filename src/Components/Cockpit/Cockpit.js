import React from 'react';
import Button from '../Button/Button';
import logo from '../../Assets/logo.svg';
import classes from './Cockpit.css';
import WithClass from '../../HOC/WithClass';



const Cockpit = (props) => {
    return  <WithClass classes={classes.Cockpit}>
                <img className={classes.logo} src={logo} alt=""></img>
                <h1 style={props.headerStyle}>{props.appTitle}</h1>
                <Button click={props.togglePeopleList}>Show People</Button>
            </WithClass>
}

export default Cockpit;