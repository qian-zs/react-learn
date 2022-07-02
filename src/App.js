// class 父子组件传值
import React from "react";
import TemperatureInput from './classFC/TemperatureInput';
import TemperatureShow from './classFC/TemperatureShow';

class TemperatureContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: '',
    };
  }

  // 父组件中的函数，接受一个参数
  handleTemp = (temperature) => {
    this.setState({
      temperature,
    });
  };

  render() {
    let { temperature } = this.state;
    return (
      <div>
        <TemperatureInput temperature={temperature} onTemperateChange={this.handleTemp} />
        <TemperatureShow temperature={parseFloat(temperature)} />
      </div>
    );
  }
}

export default TemperatureContainer;