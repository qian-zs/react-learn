import { useRef, useState, useCallback } from 'react'

export default function App() {

    const textRef = useRef('');
    const [text, setText] = useState('');

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        console.log(textRef.current);
    }, [textRef]);

    return (
        <form>
            <input value={text} onChange={(e) => {
                const { value } = e.target;
                setText(value);
                textRef.current = value;
            }} />
            <OtherForm onSubmit={handleSubmit} />
        </form>
    )
}

function OtherForm({ onSubmit }) {
    return (
        <button onClick={onSubmit}>Submit</button>
    )
}