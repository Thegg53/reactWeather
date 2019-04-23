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
    let styleH2 = {
      paddingTop: "5%",
      marginTop: "0px",
      textAlign: "left",
      marginLeft: "10%"
    };
    return (
      <div className={classDayNight}>
        <h2 style={styleH2}>{sToday}</h2>
        <MessageArea temperature={this.props.temperature} />
      </div>
    );
  }
}

export default BottomComponent;
