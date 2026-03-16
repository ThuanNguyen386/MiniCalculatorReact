import React, { Component } from "react";
import "../assets/styles/Display.css";
import PropTypes from "prop-types";

class Screen extends Component {
  static props = {
    value: PropTypes.string,
  };

  render() {
    return (
      <div className="display">
        <div>{this.props.value}</div>
      </div>
    );
  }
}

export default Screen;
