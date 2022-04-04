import React from 'react';
import './App.css';

function ListItem(props) {
    return <li>{props.value}</li>
}

function NumberList(props) {
    const number = props.numbers;
    const listItems = number.map((number) => {
        return <ListItem key={number.toString()} value={number} />
    })
    return (
        <ul>
            {listItems}
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