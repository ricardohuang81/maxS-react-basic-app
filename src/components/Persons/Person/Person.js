import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
import classes from './Person.css';

class Person extends Component {
    render() {
        console.log('[Person.js] rendering...')
        return (
            <Aux>
                <p onClick={this.props.click}>I'm {this.props.name} and {this.props.age} years young...</p>
                <p>{this.props.children}</p>
                <input 
                    type="text" 
                    value={this.props.name} 
                    onChange={this.props.changed} 
                />
            </Aux>
        );
    }
};

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, classes.Person);