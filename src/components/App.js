import React from 'react';
import Person from './Person';
import './App.css';

class App extends React.Component {
    state = {
        persons: [
            { id: 1, name: 'Tony Stark', age: 38 },
            { id: 2, name: 'Carol Danvers', age: 30 }
        ],
        otherState: 'some other tool',
        showPersons: false
    };
    
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
        this.setState({ persons: persons });
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
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '2px solid darkturquoise',
            padding: '8px',
            cursor: 'pointer'
        };

        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <Person 
                                    click={() => this.deletePersonHander(index)}
                                    name={person.name} 
                                    age={person.age}
                                    key={person.id}
                                    changed={(event) => this.nameChangedHandler(event, person.id)}
                                />
                    })}
                </div>
            );
        };

        return (
            <div className="App">
                <h1>APP</h1>
                {/* bind(this, 'argument' is recommended over () => this.switchNameHandler('argument)) method */}
                <button 
                    style={style}
                    onClick={this.togglePersonsHandler} >Toggle Me Now!
                </button>
                {persons}
            </div>
        );
    };
}

export default App;