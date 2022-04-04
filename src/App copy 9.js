import React from 'react';
import './App.css';

function NumberList(props) {
    const number = props.number;
    const listItems = number.map((number) => {
        return <li key={number.toString()}>
            {number}
        </li>
    });
    return (
        <ul>{listItems}</ul>
    );
}

const number = [1, 2, 3, 4, 5];

function App() {
    return (
        <NumberList number={number} />
    );
}

export default App;