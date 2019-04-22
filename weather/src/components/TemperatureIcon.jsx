import React, { Component } from "react";

class TemperatureIcon extends Component {
  state = {};
  render() {
    const iTemperature = this.props.temperature;
    let sWeather = this.props.weather.weather[0].description;
    sWeather = sWeather.charAt(0).toUpperCase() + sWeather.slice(1);

    console.log(this.props.isNight);
    let sMode = this.props.isNight ? "Light" : "Dark";
    let sImgSrc = `/Icons/${sMode}/${sWeather}.png`;
    // console.log(sImgSrc);
    return (
      <div>
        temperatureIcon is working
        <img src={sImgSrc} alt="iconHere" />
        <div>{parseInt(iTemperature)}°</div>
        <div>{sWeather}</div>
      </div>
    );
  }
}

export default TemperatureIcon;
