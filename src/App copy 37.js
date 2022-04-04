/*
 * @Author: your name
 * @Date: 2022-04-03 21:10:49
 * @LastEditTime: 2022-04-03 21:19:03
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /my-app/src/App copy 37.js
 */
import React from 'react';
import './App.css';

class MouseTracker extends React.Component {
    constructor(props) {
        super(props);
        
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.state = { x: 0, y: 0 };
    }

    handleMouseMove(event) {
        this.setState({
            x: event.clientX,
            y: event.clientY,
        })
    }

    render() {
        return (
            <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>
                <h1>移动鼠标!</h1>
                <p>当前的鼠标位置是 （{this.state.x}, {this.state.y}）</p>
            </div>
        )
    }
}

export default MouseTracker;