/*
 * @Author: your name
 * @Date: 2022-04-06 13:34:44
 * @LastEditTime: 2022-04-06 13:34:46
 * @LastEditors: Please set LastEditors
 * @Description: props父子通信
 * @FilePath: /my-app/src/App copy 47.js
 */
import React from 'react';
import './App.css';

function Children(props) {
    return (
        <div>
            <p>Children</p>
            <p>{props.text}</p>
        </div>
    );
}

function Parent() {
    return (
        <div>
            <p>Parent</p>
            <Children text="这是爸爸传给你的东西"></Children>
        </div>
    )
}

export default Parent;