import React from 'react';
import './Person.css';

const Person = props => {
    return (
        <div className="Person">
            <p onClick={props.click}>I'm {props.name} and {props.age} years young...</p>
            <p>{props.children}</p>
            <input type="text" value={props.name} onChange={props.changed} />
        </div>
    );
};

export default Person;