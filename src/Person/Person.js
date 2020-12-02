import React from 'react';
import './Person.css';

const person = (props) => {

    return (
        <div className="Person">
            <p onClick={props.click}>Testing out features. This is a new {props.feature} with serial-number: {props.number} </p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} />
        </div>
    )
};

export default person;