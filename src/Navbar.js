import React, { Component } from "react";
import "./Navbar.css";

export default class Navbar extends Component {
  static defaultProps = {
    onNewRecipe() {}
  };
  render() {
    return (
      <div className="navwrapper">
        <ul className="ul-list">
          <li className="logo">Recipe App</li>
          <div className="link-right">
            <li>
              <a onClick={this.props.onNewRecipe}>New Recipe</a>
            </li>
          </div>
        </ul>
      </div>
    );
  }
}
