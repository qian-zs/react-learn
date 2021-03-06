/*
 * @Author: your name
 * @Date: 2022-04-05 22:25:11
 * @LastEditTime: 2022-04-11 11:23:33
 * @LastEditors: Please set LastEditors
 * @Description: 状态提升
 * @FilePath: /my-app/src/App copy 19.js
 */
import React from 'react';
import './App.css';

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit',
};

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    // console.log('input: ', input);
    const output = convert(input);
    // console.log('output: ', output);
    const rounded = Math.round(output * 1000) / 1000; // 四舍五入
    // console.log('rounded: ', rounded);
    return rounded.toString();
}

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>;
}

class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onTemperatureChange(e.target.value);
    }

    render() {
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}:</legend>
                <input value={temperature} onChange={this.handleChange} />
            </fieldset>
        )
    }
}

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
        this.state = { temperature: '', scale: 'c' };
    }

    handleCelsiusChange(temperature) {
        // console.log('handleCelsiusChange: ', temperature);
        this.setState({ scale: 'c', temperature });
    }

    handleFahrenheitChange(temperature) {
        // console.log('handleFahrenheitChange: ', temperature);
        this.setState({ scale: 'f', temperature });
    }

    render() {
        const scale = this.state.scale;
        // console.log('scale: ', scale);
        const temperature = this.state.temperature;
        // console.log('temperature: ', temperature);
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        // console.log('celsius: ', celsius);
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
        // console.log('fahrenheit:', fahrenheit);
        return (
            <div>
                <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={this.handleCelsiusChange} />
                <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={this.handleFahrenheitChange} />
                <BoilingVerdict celsius={parseFloat(celsius)} />
            </div>
        )
    }
}

export default Calculator;