import React, { useCallback, useState } from "react";

const Index = () => {
    const [count, setCount] = useState(0);

    const getList = useCallback((n) => {
        return Array.apply(Array, Array(n)).map((item, index) => ({
            id: index,
            name: "张三" + index,
        }));
    });

    return (
        <>
            <Child getList={getList} />
            {/* 父组件render > 子组件render > 子组件输出 "child-render" */}
            <button onClick={() => setCount(count + 1)}>{count + 1}</button>
        </>
    )
};

const Child = React.memo(({ getList }) => {
    console.log("child-render");
    return (
        <>
            {getList(10).map((item) => (
                <div key={item.id}>
                    id:{item.id}, name:{item.name}
                </div>
            ))}
        </>
    )
});

export default function App() {
    return (
        <Index />
    )
};