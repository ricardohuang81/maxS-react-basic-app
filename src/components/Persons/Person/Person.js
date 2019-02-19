import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
import classes from './Person.css';
import AuthContext from '../../../context/auth-context';

class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElementReference = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount() {
        this.inputElementReference.current.focus();
        console.log(this.context.authenticated);
    }

    render() {
        console.log('[Person.js] rendering...')
        return (
            <Aux>
                {this.context.authenticated ? (
                    <p>Authenticated!</p> 
                ) : (
                    <p>Please log in!</p>
                )}
                
                <p onClick={this.props.click}>I'm {this.props.name} and {this.props.age} years young...</p>
                <p>{this.props.children}</p>
                <input
                    ref={this.inputElementReference}
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