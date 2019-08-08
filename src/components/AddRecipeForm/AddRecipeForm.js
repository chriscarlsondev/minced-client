import React, { Component } from 'react'
import MincedContext from '../../contexts/MincedContext';

export default class AddRecipeForm extends Component {
  
  static contextType = MincedContext;

  handleSubmit = e => {
    e.preventDefault();
    let newRecipe = {
      title: e.target.title.value,
      servings: e.target.servings.value,
      preptime: e.target.preptime.value,
      cooktime: e.target.cooktime.value,
      ingredients: e.target.ingredients.value,
      instructions: e.target.instructions.value,
      notes: e.target.notes.value
    }
    this.context.handleAddNewRecipe(newRecipe);
    this.props.history.push('/home');
  }

  render() {
    return (
        <>
    <header>
        <h2>Add Recipe</h2>
    </header>
      <form id="add-new-recipe" onSubmit={this.handleSubmit}>
      <div className="form-section">
        <h3>Title</h3>
        <input type="text" name="title" required />
      </div>
      <div className="form-section">
        <h3>Description</h3>
        <textarea rows="4" cols="50" name="description"></textarea>
      </div>
      <div className="form-section">
        <h3>Prep Time</h3>
        <input type="text" name="preptime" />
      </div>
      <div className="form-section">
        <h3>Cook Time</h3>
        <input type="text" name="cooktime" />
      </div>
      <div className="form-section">
        <h3>Ingredients</h3>
        <textarea rows="4" cols="50" name="ingredients"></textarea>
      </div>
      <div className="form-section">
        <h3>Instructions</h3>
        <textarea rows="4" cols="50" name="instructions"></textarea>
      </div>
      <div className="form-section">
        <h3>Servings</h3>
        <input type="text" name="servings" />
      </div>
      <div className="form-section">
        <h3>Additional Notes</h3>
        <textarea rows="4" cols="50" name="notes"></textarea>
      </div>
      <div className="form-section">
        <button type="submit">Add Recipe</button>
      </div>
            </form>
            </>
    )
  }
}
