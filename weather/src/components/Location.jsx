import React, { Component } from "react";

class Location extends Component {
  state = {
    lat: 0,
    lng: 0
  };

  componentDidMount() {
    let lat = this.state.lat;
    let lng = this.state.lng;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        // console.log("user clicked lat", lat, "lng", lng);
        this.setState({ lat: this.lat, lng: this.lng });
      });
      console.log("starting lat", lat, "lng", lng);
    }
  }

  render() {
    return (
      <div>
        LX lat {this.state.lat} lng {this.state.lng}
      </div>
    );
  }
}

export default Location;
