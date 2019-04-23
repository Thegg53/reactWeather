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
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        let lat = position.coords.latitude;
        let lng = position.coords.longitude;
        this.setState({ lat: lat, lng: lng });
        // http request
        const apiKey = "fce19d58cf2749138e64640c8fce41a5"; //This should not be here is a real application
        // const apiKey = "210ea27a26676c33013ddb301f0667ff";
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
      this.setState({ isLoaded: true });
    }
  }

  render() {
    const { error, isLoaded, weather, lat, lng } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded || !weather) {
      return <div>Loading...</div>;
    } else {
      console.log(this.state.weather);
      let isNight = false;
      if (this.state.weather.sys) {
        let sunrise = new Date(this.state.weather.sys.sunrise * 1000);
        let sunset = new Date(this.state.weather.sys.sunset * 1000);
        let now = new Date();
        if (now < sunrise || now > sunset) {
          //fully working version
          isNight = true;
        }
        // isNight = true; //test only
      }
      return (
        <div className="App">
          <HeaderComponent
            isNight={isNight}
            weather={weather}
            lat={lat}
            lng={lng}
          />
          <BottomComponent
            className="bottomElement"
            isNight={isNight}
            temperature={this.state.weather.main.temp}
          />
        </div>
      );
    }
  }
}

export default App;
