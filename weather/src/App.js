import React, { Component } from "react";
import HeaderComponent from "./components/Header";
import BottomComponent from "./components/Bottom";
import "./App.css";
class App extends Component {
  state = {
    lat: 0,
    lng: 0,
    isLoaded: false,
    error: null,
    weather: null
  };

  toCfromKelvin(inputT) {
    return inputT - 273.15;
  }

  componentDidMount() {
    // let lat = this.state.lat;
    // let lng = this.state.lng;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        let lat = position.coords.latitude;
        let lng = position.coords.longitude;
        this.setState({ lat: lat, lng: lng });
        // http request
        const apiKey = "fce19d58cf2749138e64640c8fce41a5"; //This should not be here is a real application
        const baseApi = "http://api.openweathermap.org/data/2.5/weather";
        fetch(
          baseApi +
            `?lat=` +
            this.state.lat +
            `&lon=` +
            this.state.lng +
            `&APPID=` +
            apiKey
        )
          .then(res => {
            return res.json();
          })
          .then(jsonResp => {
            // console.log(jsonResp);
            jsonResp.main.temp = this.toCfromKelvin(jsonResp.main.temp);
            this.setState({
              isLoaded: true,
              weather: jsonResp
            });
          })
          .catch(error => {
            this.setState({
              isLoaded: true,
              error
            });
          });
      });
      // console.log("starting lat", lat, "lng", lng);
      this.setState({ isLoaded: true });
    }
  }

  render() {
    const { error, isLoaded, weather, lat, lng } = this.state;
    // const iTemperature = parseInt(Math.random() * 40 - 10);

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded || !weather) {
      return <div>Loading...</div>;
    } else {
      console.log(this.state.weather);
      const iTemperature = this.state.weather.main.temp;
      return (
        <div className="App">
          <HeaderComponent
            temperature={iTemperature}
            weather={weather}
            lat={lat}
            lng={lng}
          />
          <BottomComponent temperature={iTemperature} />
        </div>
      );
    }
  }
}

export default App;
