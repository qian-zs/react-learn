import React, { useReducer } from 'react';

const initialState = [
    { id: 1, name: '张三' },
    { id: 2, name: '李四' },
];

const reducer = (state, { type, payload }) => {
    switch (type) {
        case "add":
            return [...state, payload];
        case "remove":
            return state.filter((item) => item.id !== payload.id);
        case "update":
            return state.map(item => item.id === payload.id ? { ...item, ...payload } : item);
        case "clear":
            return [];
        default:
            throw new Error();
    }
};

const List = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <>
            List:{JSON.stringify(state)}
            <button onClick={() => dispatch({ type: "add", payload: { id: 3, name: "周五" } })}>add</button>
            <button onClick={() => dispatch({ type: "remove", payload: { id: 1 } })}>update</button>
            <button onClick={() => dispatch({ type: "clear" })}>clear</button>
        </>
    );
};

export default List;