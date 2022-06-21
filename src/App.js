/*
 * @Author: your name
 * @Date: 2022-04-05 22:25:11
 * @LastEditTime: 2022-04-11 10:41:58
 * @LastEditors: Please set LastEditors
 * @Description: 要实现具名插槽可以从父组件中传递一个对像给子组件，这个对象中的内容可以是jsx，也可以是一段文本内容，还可以是一个事件方法;
 * @FilePath: /my-app/src/App.js
 */
import Navbar from './useContext/Navbar';
import Messages from './useContext/Messages';
import React from 'react';

export default function App() {
    const AppContext = React.createContext({});

    return (
        <AppContext.Provider value={{
            username: 'superawesome'
        }}>
            <div className="App">
                <Navbar />
                <Messages />
            </div>
        </AppContext.Provider>
    );
}