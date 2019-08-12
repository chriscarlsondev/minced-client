import React, { Component } from 'react'
import MincedContext from '../../contexts/MincedContext';

export default class AddRecipeForm extends Component {
  
  static contextType = MincedContext;

  handleSubmit = e => {
    e.preventDefault();
    let newRecipe = {
      title: e.target.title.value,
      description: e.target.description.value,
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

  handleClickCancel = () => {
    this.props.history.push('/home')
  }

  render() {
    return (
        <>
    <header>
        <h2>Add Recipe</h2>
    </header>
        <form id="add-new-recipe" onSubmit={this.handleSubmit}>
        <div className="form-section">
        <label htmlFor="title">Title:</label>
        <input type="text" name="title" id="title" required />
      <label htmlFor="description">Description:</label>
          <textarea rows="4" cols="50" name="description" id="description"></textarea>
          </div>
          <div className="form-section">    
          <label htmlFor="servings">Servings:</label>
        <input type="number" name="servings" id="servings" min="0" /> servings
        <label htmlFor="preptime">Prep Time:</label>
        <input type="number" name="preptime" id="preptime" min="0" /> minutes
            <label htmlFor="cooktime">Cook Time:</label>
            <input type="number" name="cooktime" id="cooktime" min="0" /> minutes
              </div>
            <div className="form-section">
            <label htmlFor="ingredients">Ingredients - Please include each ingredient on a separate line.</label>
            <textarea rows="4" cols="50" name="ingredients" id="ingredients" required></textarea>
          </div>
          <div className="form-section">
            <label htmlFor="instructions">Instructions - Please include each step-by-step instruction step on a separate line.</label>
            <textarea rows="4" cols="50" name="instructions" id="instructions" required></textarea>
          </div>
          <div className="form-section">
        <label htmlFor="notes">Additional Notes:</label>
            <textarea rows="4" cols="50" name="notes" id="notes"></textarea>
            </div>
        <button type="submit">Add Recipe</button> <button type="button" onClick={this.handleClickCancel}>Cancel</button>
            </form>
            </>
    )
  }
}
