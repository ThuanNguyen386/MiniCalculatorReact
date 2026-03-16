import React, { Component } from "react";
import Screen from "./Screen";
import GridButtons from "./GridButtons";
import "../assets/styles/App.css";
import calculate from "../utils/calculate";

class App extends Component {
  state = {
    ans: null,
    total: null,
    next: null,
    operator: null,
  };

  handleClick = (buttonName) => {
    this.setState(calculate(this.state, buttonName));
  };
  render() {
    console.log("State=", this.state);
    return (
      <div className="app">
        <Screen value={this.state.next || this.state.total || "0"} />
        <GridButtons handleClicker={this.handleClick} />
      </div>
    );
  }
}

export default App;
