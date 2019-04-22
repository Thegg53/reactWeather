import React, { Component } from "react";
import MessageArea from "./MessageArea";

class BottomComponent extends Component {
  render() {
    const dToday = new Date();
    const sToday =
      dToday.getDate() +
      `-` +
      (dToday.getMonth() + 1) +
      `-` +
      dToday.getFullYear();
    let classDayNight =
      this.props.isNight == true ? "bottomNight" : "bottomDay";
    return (
      <div className={classDayNight}>
        <h2>{sToday}</h2>
        <MessageArea temperature={this.props.temperature} />
      </div>
    );
  }
}

export default BottomComponent;
