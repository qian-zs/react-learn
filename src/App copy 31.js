import React from 'react';
import './App.css';

function Item(props) {
    return <li>{props.message}</li>;
}

const App = () => {
    const todos = ['finish doc', 'submit pr', 'nag dan to review'];
    return (
        <ul>
            {todos.map((message) => {
                return <Item key={message} message={message} />
            })}
        </ul>
    )
};

export default App;