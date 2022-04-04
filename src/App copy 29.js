import React from 'react';
import './App.css';

function NumberDescriber(props) {
    let description;
    if (props.number % 2 === 0) {
        description = <strong>even</strong>;
    } else {
        description = <i>odd</i>;
    }
    return <div>{props.number} is an {description} number.</div>;
}

function MyComponent(props) {
    console.log(props)
    const foo = props.foo
    return (
        <NumberDescriber number={foo} />
    )
}

function App() {
    return (
        <MyComponent foo={1 + 2 + 3 + 4} />
    );
}

export default App;