import React from 'react';
import classes from './App.css';
import Person from './Person';


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
        let persons = null;
        
        let btnClass = '';

        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <Person 
                            click={() => this.deletePersonHander(index)}
                            name={person.name} 
                            age={person.age}
                            key={person.id}
                            changed={(event) => this.nameChangedHandler(event, person.id)} />
                    })}
                </div>
            );
            btnClass = classes.Indian
        };

        const assignedClasses = [];
        if (this.state.persons.length <= 2) {
            assignedClasses.push(classes.indianred);
        }
        if (this.state.persons.length <= 1) {
            assignedClasses.push(classes.italic);
        }

        return (
            <div className={classes.App}>
                <h1>APP</h1>
                <p className={assignedClasses.join(' ')}>Dynamically Style</p>
                {/* bind(this, 'argument' is recommended over () => this.switchNameHandler('argument)) method */}
                <button
                    className={btnClass}
                    onClick={this.togglePersonsHandler} >Toggle Me Now!
                </button>
                {persons}
            </div>
            
        );
    };
}

export default App;