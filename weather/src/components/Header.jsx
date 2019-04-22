import React, { Component } from "react";
import TemperatureIcon from "./TemperatureIcon";
import Location from "./Location";
class HeaderComponent extends Component {
  //   constructor(props) {
  //     super(props);
  //   }

  state = {};

  render() {
    // console.log(iTemperature);

    return (
      <div className="headerDay">
        <Location lat={this.props.lat} lng={this.props.lng} />
        <TemperatureIcon temperature={this.props.temperature} />
      </div>
    );
  }
}

export default HeaderComponent;
