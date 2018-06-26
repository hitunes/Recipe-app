import React, { Component } from "react";
import "./RecipeInput.css";

export default class componentName extends Component {
  static defaultProps = {
    onClose() {},
    onSave() {}
  };

  constructor(props) {
    super(props);
    this.state = {
      title: "",
      instructors: "",
      ingredients: [" "],
      img: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleNewIngredient = this.handleNewIngredient.bind(this);
    this.handleChangeIng = this.handleChangeIng.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleNewIngredient(e) {
    const { ingredients } = this.state;
    this.setState({ ingredients: [...ingredients, ""] });
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.onSave({ ...this.state });
    this.setState = { title: "", instructors: "", ingredients: [""], img: "" };
  }
  handleChangeIng(e) {
    const index = Number(e.target.name.split("-")[1]);
    const ingredients = this.state.ingredients.map(
      (ing, i) => (i === index ? e.target.value : ing)
    );
    this.setState({ ingredients });
  }

  render() {
    const { title, instructions, img, ingredients } = this.state;
    const { onClose } = this.props;
    let inputs = ingredients.map((ing, i) => (
      <div className="recipe-form-line" key={`ingredient-${i}`}>
        <label className="recipe-form-line-input">
          {i + 1}
          <input
            type="text"
            name={`ingredient-${i}`}
            value={ing}
            size={45}
            placeholder="Ingredient"
            onChange={this.handleChangeIng}
          />
        </label>
      </div>
    ));
    return (
      <div className="recipe-form-container">
        <form className="recipe-form" onSubmit={this.handleSubmit}>
          <button type="button" className="close-button" onClick={onClose}>
            X
          </button>
          <div className="recipe-form-line">
            <label htmlFor="recipe-title-input" className="recipe-title-input">
              Title
            </label>
            <input
              id="recipe-title-input"
              key="title"
              type="text"
              name="title"
              value={title}
              size={42}
              onChange={this.handleChange}
            />
          </div>
          <label
            htmlFor="recipe-instructions-input"
            style={{ marginTop: "5px" }}
          >
            Instructions
          </label>{" "}
          <br />
          <textarea
            id="recipe-instructions-input"
            key="instructions"
            type="instructions"
            name="instructions"
            rows="5"
            cols="40"
            value={instructions}
            onChange={this.handleChange}
          />
          <div className="style-instructions">
            {inputs}
            <button
              type="button"
              className="buttons"
              onClick={this.handleNewIngredient}
            >
              +
            </button>
          </div>
          <div className="recipe-form-line">
            <label htmlFor="recipe-img-input">Image Url </label>
            <input
              id="recipe-img-input"
              type="text"
              name="img"
              value={img}
              size={36}
              onChange={this.handleChange}
            />
          </div>
          <button
            type="submit"
            className="buttons"
            style={{ alignSelf: "flex-end", marginRight: 0 }}
          >
            Save
          </button>
        </form>
      </div>
    );
  }
}
