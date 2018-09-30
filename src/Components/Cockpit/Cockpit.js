import React from 'react';
import Button from '../Button/Button';
import logo from '../../Assets/logo.svg';
import classes from './Cockpit.css'



const Cockpit = (props) => {
    return  <div className={classes.Cockpit}>
                <img className={classes.logo} src={logo}></img>
                <h1 style={props.headerStyle}>ALL THE PEOPLE ARE HERE</h1>
                <Button click={props.togglePeopleList}>Show People</Button>
            </div>
}

export default Cockpit;