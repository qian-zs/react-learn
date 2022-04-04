/*
 * @Author: your name
 * @Date: 2022-04-04 15:58:23
 * @LastEditTime: 2022-04-04 17:20:24
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /my-app/src/App.js
 */
import React, { useState, useEffect } from 'react';
import './App.css';

function Example() {
    const [count, setCount] = useState(0);

    // 相当于 componentDidMount 和 componentDidUpdate
    useEffect(() => {
        // 使用浏览器的 API 更新页面标题
        document.title = `You clicked ${count} times`;
    });

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}

export default Example;