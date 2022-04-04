/*
 * @Author: your name
 * @Date: 2022-03-31 22:21:57
 * @LastEditTime: 2022-03-31 22:21:57
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /my-app/src/App copy 31.js
 */
import React from 'react';
import './App.css';

function Item(props) {
    return <li>{props.message}</li>;
}

const App = () => {
    const todos = ['finish doc', 'submit pr', 'nag dan to review'];
    return (
        <ul>
            {todos.map((message) => {
                return <Item key={message} message={message} />
            })}
        </ul>
    )
};

export default App;