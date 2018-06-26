import React, { Component } from "react";
import "./Recipe.css";
export default class Recipe extends Component {
  render() {
    // const title = this.props.title;
    const { title, ingredients, img, instructions, id, onDelete } = this.props;
    return (
      <div className="recipe">
        <img src={img} alt={title} />
        <div className="recipe-card">
          <h3>{title}</h3>
          <ul>{ingredients.map((value, key) => <li key={key}>{value}</li>)}</ul>
          <p>{instructions}</p>
          <button onClick={() => onDelete(id)}>Delete</button>
        </div>
      </div>
    );
  }
}
