import React, { Component } from "react";

class TemperatureIcon extends Component {
  state = {};
  render() {
    const iTemperature = this.props.temperature;
    return (
      <div>
        temperatureIcon is working
        <img src="/Icons/Dark/Rain.png" alt="iconHere" />
        <div>{iTemperature} C</div>
      </div>
    );
  }
}

export default TemperatureIcon;
