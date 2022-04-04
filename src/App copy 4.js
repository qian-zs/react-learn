import React from 'react';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: true };

        // 为了在回调中使用 `this`，这个绑定是必不可少的
        // this.handleClick = this.handleClick.bind(this);
    }

    handleClick(id, e) {
        console.log(id, e)
        this.setState(prevState => {
            return {
                isToggleOn: !prevState.isToggleOn
            }
        });
    }

    render() {
        return (
            <button onClick={(e) => this.handleClick(1, e)}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        )
    }
}

export default App;