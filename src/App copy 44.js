import React, { useReducer, useState } from 'react';
import './App.css';

function init(initialCount) {
    return { count: initialCount };
}

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        case 'reset':
            return init(action.payload);
        default:
            throw new Error();
    }
}

function Counter({ initialCount }) {
    const [state, dispatch] = useReducer(reducer, initialCount, init);
    return (
        <>
            Count: {state.count}
            <button
                onClick={() => dispatch({ type: 'reset', payload: initialCount })}>
                Reset
            </button>
            <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
            <button onClick={() => dispatch({ type: 'increment' })}>+</button>
        </>
    );
}

function App() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h3>hook ver</h3>
            <p>counter1:{count}</p>
            <div>
                <button onClick={() => { setCount(count - 1) }}>-</button>
                <button onClick={() => { setCount(count + 1) }}>+</button>
            </div>
            <Counter initialCount={count}></Counter>
        </div>
    );
}

export default App;