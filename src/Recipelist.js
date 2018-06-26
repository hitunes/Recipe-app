import React, { Component } from "react";
import Recipe from "./Recipe";
import "./Recipelist.css";
export default class Recipelist extends Component {
  render() {
    const { onDelete } = this.props;
    return (
      <div className="recipe-list">
        {this.props.recipes.map((reci, index) => (
          <Recipe key={reci.id} {...reci} onDelete={onDelete} />
        ))}
      </div>
    );
  }
}
