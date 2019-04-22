import React, { Component } from "react";
import MessageArea from "./MessageArea";

class BottomComponent extends Component {
  //   constructor(props) {
  //     super(props);
  //   }
  state = {};
  render() {
    const dToday = new Date();
    const sToday =
      dToday.getDate() +
      `-` +
      (dToday.getMonth() + 1) +
      `-` +
      dToday.getFullYear();
    return (
      <div className="bottomDay">
        <h2>{sToday}</h2>
        <MessageArea temperature={this.props.temperature} />
      </div>
    );
  }
}

export default BottomComponent;
