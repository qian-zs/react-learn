/*
 * @Author: your name
 * @Date: 2022-04-06 13:45:54
 * @LastEditTime: 2022-04-06 13:46:00
 * @LastEditors: Please set LastEditors
 * @Description: Context,跨组建通信
 * @FilePath: /my-app/src/App copy 50.js
 */
import React from 'react';
import './App.css';

const { Consumer, Provider } = React.createContext();

class Children extends React.Component {
    render() {
        return (
            <Consumer>
                {(value) => (
                    <div>
                        <p>Children</p>
                        <p>{value.text}</p>
                    </div>
                )}
            </Consumer>
        );
    }
}

class Parent extends React.Component {
    render() {
        return (
            <Provider value={{ text: '我是context' }}>
                <div>
                    <p>Parent</p>
                    <Children></Children>
                </div>
            </Provider>
        )
    }
}

export default Parent;