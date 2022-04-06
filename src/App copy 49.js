/*
 * @Author: your name
 * @Date: 2022-04-06 13:42:36
 * @LastEditTime: 2022-04-06 13:42:38
 * @LastEditors: Please set LastEditors
 * @Description: 变量提升，兄弟组建通信
 * @FilePath: /my-app/src/App copy 49.js
 */
import React, { useState } from 'react';
import './App.css';

function Children(props) {
    return (
        <div>
            <p>Children</p>
            <button onClick={() => { props.setText('我是Children发的信息') }}>给Children1发信息</button>
        </div>
    )
}

function Children1(props) {
    return (
        <div>
            <p>Children1</p>
            <p>{props.text}</p>
        </div>
    )
}

function App() {
    const [text, setText] = useState('');

    return (
        <>
            <div>APP</div>
            <Children setText={setText}></Children>
            <Children1 text={text}></Children1>
        </>
    )
}

export default App;