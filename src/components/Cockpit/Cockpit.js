import React, { useEffect } from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        const timer = setTimeout(() => {
            alert('Saved data to cloud');
        }, 1000);
        return () => {
            clearTimeout(timer);
            console.log('[Cockpit.js] cleanup work in useEffect');
        };
    }, [] );

    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect');
        return () => {
            console.log('[Cockpit.js] cleanup work in 2nd useEffect');
        };
    });

    const assignedClasses = [];
    
    let btnClass = '';
    
    if (props.showPersons) {
        btnClass = classes.Indian;
    }
    
    if (props.personsLength <= 2) {
        assignedClasses.push(classes.indianred);
    }
    if (props.personsLength <= 1) {
        assignedClasses.push(classes.italic);
    }
    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>Dynamically Style</p>
            {/* bind(this, 'argument' is recommended over () => this.switchNameHandler('argument)) method */}
            <button
                className={btnClass}
                onClick={props.clicked} >Toggle Me Now!
            </button>
        </div>
    )
}

export default React.memo(cockpit);