/*
 * @Author: your name
 * @Date: 2022-03-31 22:25:13
 * @LastEditTime: 2022-03-31 22:25:13
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /my-app/src/App copy 32.js
 */
import React from 'react';
import './App.css';

function Repeat(props) {
    let items = [];
    for (let i = 0; i < props.numTimes; i++) {
        items.push(props.children(i));
    }
    return <div>{items}</div>;
}

const App = () => {
    return (
        <Repeat numTimes={10}>
            {(index) => {
                return <div key={index}>This is item {index} in the list.</div>
            }}
        </Repeat>
    )
};

export default App;