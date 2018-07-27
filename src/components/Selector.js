import React, { Component } from "react";
import "../css/selector.css";
import headElements from "../library/heads.json";
import handElements from "../library/hands.json";
import armElements from "../library/arm.json";
import torsoElements from "../library/torso.json";

class Selector extends Component {
  render() {
    // Passing throught the state from the properties
    const category = this.props.currentCategory;
    const isLeft = this.props.isLeft;
    var library;
    var sideIdencator;

    switch (category) {
      case "head":
        library = headElements;
        sideIdencator = false;
        break;
      case "hand":
        library = handElements;
        sideIdencator = true;
        break;
      case "arm":
        library = armElements;
        sideIdencator = true;
        break;
      case "torso":
        library = torsoElements;
        sideIdencator = false;
        break;
      default:
        library = headElements;
        sideIdencator = false;
    }

    //JSX element to display the HTML
    const elementDiv = [];

    for (let i = 0; i < library.length; i++) {
      elementDiv.push(
        <div
          className="el"
          key={i}
          onClick={() => {
            window.changeMesh(category, library[i], isLeft);
          }}
        >
          <div className="img">
            <img
              src={"img/library/" + category + "/" + library[i].img}
              alt={library[i].img}
            />
          </div>
          <div className="el-name">{library[i].name}</div>
          {/* <div className="reference">
            <div className="popup">Author: {library[i].author}</div>
          </div> */}
        </div>
      );
    }

    const buttons = (
      <div className="abs switch">
        <div
          className={
            "abs left side L " + (isLeft ? "side-selected" : "")
          }
          onClick={() => {
            this.props.updateLeft(true);
          }}
        >
          Left
        </div>
        <div
          className={
            "abs right side R " + (isLeft ? "" : "side-selected")
          }
          onClick={() => {
            this.props.updateLeft(false)
          }}
        >
          Right
        </div>
      </div>
    );

    return (
      <div className="abs top right right-side">
        <div className="box">{sideIdencator ? buttons : ""}</div>
        <div
          className={
            "abs top left selector " + (sideIdencator ? "selector-full" : "")
          }
        >
          {elementDiv}
        </div>
      </div>
    );
  }
}

export default Selector;