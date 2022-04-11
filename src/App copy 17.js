/*
 * @Author: your name
 * @Date: 2022-04-05 22:25:11
 * @LastEditTime: 2022-04-11 11:23:21
 * @LastEditors: Please set LastEditors
 * @Description: 状态提升
 * @FilePath: /my-app/src/App copy 17.js
 */
import React from 'react';
import './App.css';

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>;
}

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = { temperature: '' };
    }

    handleChange(e) {
        this.setState({ temperature: e.target.value });
    }

    render() {
        const temperature = this.state.temperature;
        return (
            <fieldset>
                <legend>Enter temperature in Celsius:</legend>
                <input value={temperature} onChange={this.handleChange} />
                <BoilingVerdict celsius={parseFloat(temperature)} />
            </fieldset>
        )
    }
};

export default Calculator;