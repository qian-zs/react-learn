import React from 'react';
import './App.css';

function ListItem(props) {
    return <li>{props.value}</li>
}

function NumberList(props) {
    const numbers = props.numbers;
    return (
        <ul>
            {numbers.map((number) => {
                return <ListItem key={number.toString()} value={number} />
            })}
        </ul>
    )
}

const numbers = [1, 2, 3, 4, 5];

function App() {
    return (
        <NumberList numbers={numbers} />
    );
}

export default App;