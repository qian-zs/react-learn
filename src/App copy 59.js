import React, { forwardRef, useRef } from "react";

const Index = () => {
    const inputEl = useRef(null);
    const handleFocus = () => {
        inputEl.current.focus();
    };

    return (
        <>
            <Child ref={inputEl} />
            <button onClick={handleFocus}>Focus</button>
        </>
    );
};

const Child = forwardRef((props, ref) => {
    return <input ref={ref} />
});

export default function App() {
    return (
        <Index />
    )
};