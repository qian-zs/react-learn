import React from 'react';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log('显示button的ref: ', this.myRef);
    }

    render() {
        const FancyButton = React.forwardRef((props, ref) => (
            <button ref={ref} className="FancyButton" onClick={this.handleClick}>{props.children}</button>
        ));
        return (
            <FancyButton ref={this.myRef}>Click me!</FancyButton>
        )
    }
}

export default App;