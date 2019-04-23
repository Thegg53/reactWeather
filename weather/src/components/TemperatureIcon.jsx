import React, { Component } from "react";

class TemperatureIcon extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    const aMappingIcons = [
      { icon: "01d", image: "Clear" },
      { icon: "02d", image: "Few clouds" },
      { icon: "03d", image: "Scattered clouds" },
      { icon: "04d", image: "broken clouds" },
      { icon: "09d", image: "Shower rain" },
      { icon: "10d", image: "Rain" },
      { icon: "11d", image: "Thunderstorm" },
      { icon: "13d", image: "Snow" },
      { icon: "50d", image: "Mist" },
      { icon: "01n", image: "Clear" },
      { icon: "02n", image: "Few clouds" },
      { icon: "03n", image: "Scattered clouds" },
      { icon: "04n", image: "broken clouds" },
      { icon: "09n", image: "Shower rain" },
      { icon: "10n", image: "Rain" },
      { icon: "11n", image: "Thunderstorm" },
      { icon: "13n", image: "Snow" },
      { icon: "50n", image: "Mist" }
    ];
    const inputIcon = this.props.weather.weather[0].icon;
    let sWeather = aMappingIcons.filter(i => i.icon == inputIcon)[0].image;

    const iTemperature = this.props.temperature;
    let sMode = this.props.isNight ? "Light" : "Dark";
    let sImgSrc = `/Icons/${sMode}/${sWeather}.png`;
    return (
      <div className="iconHolder">
        <img
          className="imageElement marginTop2vh"
          src={sImgSrc}
          alt="iconHere"
        />
        <div className="temperatureElement marginTop2vh">
          {parseInt(iTemperature)}°
        </div>
      </div>
    );
  }
}

export default TemperatureIcon;
