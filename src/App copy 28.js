/*
 * @Author: your name
 * @Date: 2022-03-31 14:57:00
 * @LastEditTime: 2022-03-31 14:57:00
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /my-app/src/App copy 28.js
 */
import React from 'react';
import './App.css';

function MyComponent(props) {
    console.log(props)
    const foo = props.foo
    return (
        <div>{foo}</div>
    )
}

function App() {
    return (
        <MyComponent foo={1 + 2 + 3 + 4} />
    );
}

export default App;