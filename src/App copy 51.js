/*
 * @Author: your name
 * @Date: 2022-04-06 13:51:06
 * @LastEditTime: 2022-04-06 13:51:12
 * @LastEditors: Please set LastEditors
 * @Description: node的events模块的单例通信
 * @FilePath: /my-app/src/App copy 51.js
 */
import React, { useState } from 'react';
import Events from 'events';
import './App.css';

function Children(props) {
    return (
        <div>
            <p>Children</p>
            <p>{props.text}</p>
            <button onClick={() => { props.event.emit('foo') }}>点击我改变爸爸传给我的东西</button>
        </div>
    )
}

function Parent() {
    const [text, setText] = useState("这是爸爸传给你的东西");
    const event = new Events();

    event.on('foo', () => { setText('改变了') });

    return (
        <div>
            <p>Parent</p>
            <Children event={event} text={text}></Children>
        </div>
    );
}

export default Parent;