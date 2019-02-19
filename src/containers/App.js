import React from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux';

class App extends React.Component {
    constructor(props) {
        super(props);
        console.log('[App.js] constructor')
    }
    state = {
        persons: [
            { id: 1, name: 'Tony Stark', age: 38 },
            { id: 2, name: 'Carol Danvers', age: 30 }
        ],
        otherState: 'some other tool',
        showPersons: false,
        showCockpit: true,
        changeCounter: 0
    };
    
    static getDerivedStateFromProps(props, state) {
        console.log('[App.js] getDerivedStateFromProps', props)
        return state;
    }

    componentDidMount() {
        console.log('[App.js] componentDidMount');
    }

    shouldComponentUpdate() {
        console.log('[App.js] shouldComponentUpdate');
        return true;
    }

    componentDidUpdate() {
        console.log('[App.js] componenetDidUpdate');
    }

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });
        console.log("personIndex:", personIndex);
        const person = {
            ...this.state.persons[personIndex]
        };
        person.name = event.target.value;
        const persons = [...this.state.persons];
        persons[personIndex] = person;
        this.setState((prevState, props) => { 
            return {
                persons: persons, 
                changeCounter: prevState.changeCounter + 1 
            };
        });
    };
    
    deletePersonHander = personIndex => {
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({ persons: persons })
    };

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({ showPersons: !doesShow });
    };

    render() { 
        console.log('[App.js] render')
        let persons = null;

        if (this.state.showPersons) {
            persons = <Persons 
                        persons={this.state.persons}
                        clicked={this.deletePersonHander}
                        changed={this.nameChangedHandler}
                      />
        };

        return (
            <Aux>
                <button onClick={() => {
                    this.setState({ showCockpit: false });
                }}>
                    Remove Cockpit
                </button>
                {this.state.showCockpit ? (
                    <Cockpit
                        title={this.props.appTitle}
                        showPersons={this.state.showPersons}
                        personsLength={this.state.persons.length}
                        clicked={this.togglePersonsHandler}
                    />
                ) : null}
                {persons}
            </Aux>
        );
    };
}

export default withClass(App, classes.App);