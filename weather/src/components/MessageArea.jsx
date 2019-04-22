import React, { Component } from "react";

class MessageArea extends Component {
  //   constructor(props) {
  //     super(props);
  //   }

  state = {};
  render() {
    const iTemperature = this.props.temperature;
    let sFunnyText = "";
    if (iTemperature < 0) {
      sFunnyText = `Stay inside. It really really isn’t worth it today!`;
    } else if (iTemperature < 10) {
      sFunnyText = `Put on a lot of layers and you might be okay... Might!`;
    } else if (iTemperature < 20) {
      sFunnyText = `Shouldn’t you be outside and do stuff right now?`;
    } else {
      sFunnyText = `It’s gettin’ hot in here... Burn burn burn... and so on`;
    }
    return <div>{sFunnyText}</div>;
  }
}

export default MessageArea;
