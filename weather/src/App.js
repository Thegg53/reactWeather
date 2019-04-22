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
    items: []
  };

  componentDidMount() {
    let lat = this.state.lat;
    let lng = this.state.lng;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.setState({ lat: this.lat, lng: this.lng });
        // http request
        const apiKey = "fce19d58cf2749138e64640c8fce41a5"; //This should not be here is a real application
        const baseApi = "http://api.openweathermap.org/data/2.5/weather";

        // const callApi = async () => {
        //   await fetch(baseApi + `?lat=` +  this.state.lat + `&lon=` + this.state.lng +
        //   `&APPID=` + apiKey)
        // };
        fetch(
          `http://api.openweathermap.org/data/2.5/weather?lat=` +
            this.state.lat +
            `&lon=` +
            this.state.lng +
            `&APPID=` +
            apiKey
        )
          .then(res => {
            return res.json();
            // this.setState({
            //   isLoaded: true,
            //   items: res.items
            // });
          })
          .then(jsonResp => {
            console.log(jsonResp);
            // this.setState({
            //   isLoaded: true,
            //   items: res.items
            // });
          })
          .catch(error => {
            this.setState({
              isLoaded: true,
              error
            });
          });
      });
      console.log("starting lat", lat, "lng", lng);

      // var request = new XMLHttpRequest();
      // var requestString =
      //   "api.openweathermap.org/data/2.5/weather?lat=35&lon=139&APPID=fce19d58cf2749138e64640c8fce41a5";
      // request.open("get", requestString, true);
      // request.send();
      this.setState({ isLoaded: true });
    }
  }

  render() {
    const { error, isLoaded, items } = this.state;
    const iTemperature = parseInt(Math.random() * 40 - 10);
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="App">
          <HeaderComponent
            temperature={iTemperature}
            lat={this.state.lat}
            lng={this.state.lng}
          />
          <BottomComponent temperature={iTemperature} />
        </div>
      );
    }
  }
}

export default App;
