import React, { Component } from "react";
import PropTypes from "prop-types";
import "../assets/styles/Button.css";

class Button extends Component {
  static propTypes = {
    name: PropTypes.string,
    wide: PropTypes.bool,
    red: PropTypes.bool,
    handleClicker: PropTypes.func,
  };

  handleClick = () => {
    this.props.handleClicker(this.props.name);
  };

  render() {
    const className = [
      "single-button",
      this.props.wide ? "wide" : "",
      this.props.red ? "red" : "",
    ];

    return (
      <div className={className.join(" ").trim()}>
        <button onClick={this.handleClick}>{this.props.name}</button>
      </div>
    );
  }
}

export default Button;
