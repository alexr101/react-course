import React from 'react';
import Button from '../Button/Button';
import logo from '../../Assets/logo.svg';
import classes from './Cockpit.css';
import withClass from '../../HOC/WithClass';
import Aux from '../../HOC/Aux';



const Cockpit = (props) => {
    return  <Aux>
                <img className={classes.logo} src={logo} alt=""></img>
                <h1 style={props.headerStyle}>{props.appTitle}</h1>
                <Button click={props.togglePeopleList}>Show People</Button>
            </Aux>
}

export default withClass(Cockpit, classes.Cockpit);