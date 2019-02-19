import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const cockpit = (props) => {

    const toggleButtonRef = useRef(null);

    const authContext = useContext(AuthContext);

    console.log(authContext.authenticated);

    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // HTTP request...
        // const timer = setTimeout(() => {
        //     alert('Saved data to cloud');
        // }, 1000);

        // return () => {
        //     clearTimeout(timer);
        //     console.log('[Cockpit.js] cleanup work in useEffect');
        // };

        toggleButtonRef.current.click();

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
                ref={toggleButtonRef}
                className={btnClass}
                onClick={props.clicked} >Toggle Me Now!
            </button>
            <button onClick={authContext.login}>Log in</button>
        </div>
    )
}

export default React.memo(cockpit);