import React, { useRef } from 'react';
import './App.css';

function App() {
    const inputEl = useRef(null);
    const onButtonClick = () => {
        inputEl.current.focus();
    }
    return (
        <>
            <input ref={inputEl} type="text" />
            <button onClick={onButtonClick}>Focus the input</button>
        </>
    );
}

export default App;