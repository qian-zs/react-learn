import React from 'react';
import './App.css';

function Repeat(props) {
    let items = [];
    for (let i = 0; i < props.numTimes; i++) {
        items.push(props.children(i));
    }
    return <div>{items}</div>;
}

const App = () => {
    return (
        <Repeat numTimes={10}>
            {(index) => {
                return <div key={index}>This is item {index} in the list.</div>
            }}
        </Repeat>
    )
};

export default App;