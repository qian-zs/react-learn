import { useState } from 'react';

const App = () => {
    const [count, setCount] = useState(0);
    const [obj, setObj] = useState({ id: 1 });

    return (
        <>
            {/* 普通更新 */}
            <div>count: {count}</div>
            <button onClick={() => setCount(count + 1)}>add</button>
            {/* 函数式更新 */}
            <div>obj: {JSON.stringify(obj)}</div>
            <button onClick={() => setObj((prevObj) => ({ ...prevObj, ...{ id: 2, name: "张三" } }))}>merge</button>
        </>
    )
};

export default App;