import React, { Component } from "react";
import HeaderComponent from "./components/Header";
import BottomComponent from "./components/Bottom";
import "./App.css";
class App extends Component {
  render() {
    const iTemperature = Math.random() * 40 - 10;
    return (
      <div className="App">
        <HeaderComponent temperature={iTemperature} />
        <BottomComponent temperature={iTemperature} />
      </div>
    );
  }
}

export default App;
