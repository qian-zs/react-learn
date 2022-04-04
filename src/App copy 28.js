import React from 'react';
import './App.css';

function MyComponent(props) {
    console.log(props)
    const foo = props.foo
    return (
        <div>{foo}</div>
    )
}

function App() {
    return (
        <MyComponent foo={1 + 2 + 3 + 4} />
    );
}

export default App;