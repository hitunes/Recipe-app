import React, { Component } from "react";
// import Recipe from "./Recipe";
import Recipelist from "./Recipelist";
import Navbar from "./Navbar";
import RecipeInput from "./RecipeInput";
import "./RecipeApp.css";

export default class RecipeApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      nextRecipeId: 0,
      showform: false
    };
    this.handleSave = this.handleSave.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }
  handleSave(recipe) {
    this.setState((prevState, props) => {
      const newRecipe = { ...recipe, id: this.state.nextRecipeId };
      return {
        nextRecipeId: prevState.nextRecipeId + 1,
        recipes: [...this.state.recipes, newRecipe],
        showform: false
      };
    });
  }
  onDelete(id) {
    const recipes = this.state.recipes.filter(r => r.id !== id);
    this.setState({ recipes });
  }
  render() {
    const { showform } = this.state;
    return (
      <div className="App">
        <Navbar onNewRecipe={() => this.setState({ showform: true })} />
        {showform ? (
          <RecipeInput
            onClose={() =>
              this.setState({
                showform: false
              })
            }
            onSave={this.handleSave}
          />
        ) : null}
        <Recipelist recipes={this.state.recipes} onDelete={this.onDelete} />
      </div>
    );
  }
}
