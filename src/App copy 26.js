import React from 'react';
import './App.css';

const myRef = React.createRef();

function handleClick() {
    console.log(myRef);
}

function App() {
    const FancyButton = React.forwardRef((props, ref) => (
        <button ref={ref} className="FancyButton" onClick={handleClick}>{props.children}</button>
    ));
    return (
        <FancyButton ref={myRef}>Click me!</FancyButton>
    )
}

export default App;