import React, { Component } from "react";
import TemperatureIcon from "./TemperatureIcon";
import Location from "./Location";
class HeaderComponent extends Component {
  //   constructor(props) {
  //     super(props);
  //   }

  state = {};

  render() {
    const iTemperature = this.props.temperature;
    // console.log(iTemperature);

    return (
      <div className="headerDay">
        <Location />
        <TemperatureIcon />
        <div>{iTemperature}</div>
      </div>
    );
  }
}

export default HeaderComponent;
