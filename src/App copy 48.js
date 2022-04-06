/*
 * @Author: your name
 * @Date: 2022-04-06 13:39:20
 * @LastEditTime: 2022-04-06 13:39:23
 * @LastEditors: Please set LastEditors
 * @Description: 回调函数，子父通信
 * @FilePath: /my-app/src/App copy 48.js
 */
import React, { useState } from 'react';
import './App.css';

function Children(props) {
    return (
        <div>
            <p>Children</p>
            <p>{props.text}</p>
            <button onClick={() => { props.handleChange('改变了') }}>点击我改变爸爸传给我的东西</button>
        </div>
    );
}

function Parent() {
    const [text, setText] = useState('这是爸爸传给你的东西');
    function handleChange(val) {
        setText(val)
    }
    return (
        <div>
            <p>Parent</p>
            <Children handleChange={handleChange} text={text}></Children>
        </div>
    );
}

export default Parent;