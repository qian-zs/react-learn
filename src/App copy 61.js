import { useEffect, useLayoutEffect, useRef } from "react"
import './App.css'

const UseEffect = () => {
    const box = useRef();

    useEffect(() => {
        box.current.style.marginLeft = 100 + "px";
    }, []);

    return (
        <div className="box box1" ref={box}>
            useEffect
        </div>
    );
}

const UseLayoutEffect = () => {
    const box = useRef();
    useLayoutEffect(() => {
        box.current.style.marginLeft = 100 + "px";
    }, []);

    return (
        <div className="box box2" ref={box}>
            UseLayoutEffect
        </div>
    );
}

export default function App() {
    return (
        <div className="App">
            <h1>刷新浏览器看下区别效果</h1>
            <UseEffect />
            <UseLayoutEffect />
        </div>
    )
}