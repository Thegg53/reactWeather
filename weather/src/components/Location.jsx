import React, { Component } from "react";

class Location extends Component {
  render() {
    return (
      <div>
        {this.props.name}
        {/* current coordinates: lat {parseInt(this.props.lat)}
        lng {parseInt(this.props.lng)} */}
      </div>
    );
  }
}

export default Location;
