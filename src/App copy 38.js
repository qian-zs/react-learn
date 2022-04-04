import React from 'react';
import './App.css';

class Cat extends React.Component {
    render() {
        const mouse = this.props.mouse;
        return (
            <div className='cat' style={{ position: 'absolute', left: mouse.x, top: mouse.y }}></div>
        )
    }
}

class Mouse extends React.Component {
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
                {/* 使用 `render`prop 动态决定要渲染的内容，而不是给出一个 <Mouse> 渲染结果的静态表示 */}
                {this.props.render(this.state)}
            </div>
        )
    }
}

class MouseTracker extends React.Component {
    render() {
        return (
            <>
                <h1>移动鼠标！</h1>
                <Mouse render={mouse => (
                    <Cat mouse={mouse} />
                )} />
            </>
        )
    }
}

export default MouseTracker;