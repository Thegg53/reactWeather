import React, { Component } from "react";
import TemperatureIcon from "./TemperatureIcon";
import Location from "./Location";
class HeaderComponent extends Component {
  state = {};

  render() {
    let classDayNight =
      this.props.isNight == true ? "headerNight" : "headerDay";
    // console.log(classDayNight);

    return (
      <div className={classDayNight + " container"}>
        <Location
          lat={this.props.lat}
          lng={this.props.lng}
          name={this.props.weather.name}
        />
        <TemperatureIcon
          temperature={this.props.weather.main.temp}
          weather={this.props.weather}
          isNight={this.props.isNight}
        />
      </div>
    );
  }
}

export default HeaderComponent;
