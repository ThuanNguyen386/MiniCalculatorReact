import { Component } from "react";
import Button from "./Button";
import PropTypes from "prop-types";
import "../assets/styles/GridButtons.css";

class GridButtons extends Component {
  static propTypes = {
    handleClicker: PropTypes.func,
  };

  handleClick = (buttonName) => {
    this.props.handleClicker(buttonName);
  };

  handleKeyDown = (e) => {
    if (e.key === "Escape") {
      this.props.handleClicker("AC");
    }
  };

  render() {
    return (
      <div className="grid-buttons">
        <div className="grid-buttons-row">
          <Button name="<-" handleClicker={this.handleClick} wide />
        </div>
        <div className="grid-buttons-row">
          <Button name="AC" handleClicker={this.handleClick} />
          <Button name="+/-" handleClicker={this.handleClick} />
          <Button name="%" handleClicker={this.handleClick} />
          <Button name="÷" handleClicker={this.handleClick} red />
        </div>
        <div className="grid-buttons-row">
          <Button name="7" handleClicker={this.handleClick} />
          <Button name="8" handleClicker={this.handleClick} />
          <Button name="9" handleClicker={this.handleClick} />
          <Button name="x" handleClicker={this.handleClick} red />
        </div>
        <div className="grid-buttons-row">
          <Button name="4" handleClicker={this.handleClick} />
          <Button name="5" handleClicker={this.handleClick} />
          <Button name="6" handleClicker={this.handleClick} />
          <Button name="-" handleClicker={this.handleClick} red />
        </div>
        <div className="grid-buttons-row">
          <Button name="1" handleClicker={this.handleClick} />
          <Button name="2" handleClicker={this.handleClick} />
          <Button name="3" handleClicker={this.handleClick} />
          <Button name="+" handleClicker={this.handleClick} red />
        </div>
        <div className="grid-buttons-row">
          <Button name="0" handleClicker={this.handleClick} wide />
          <Button name="." handleClicker={this.handleClick} />
          <Button name="=" handleClicker={this.handleClick} red />
        </div>
      </div>
    );
  }
}

export default GridButtons;
