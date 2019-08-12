import React, { Component } from 'react'
import MincedContext from '../../contexts/MincedContext';

export default class AddRecipeForm extends Component {
  
  static contextType = MincedContext;

  handleSubmit = e => {
    e.preventDefault();
    let newRecipe = {
      title: e.target.title.value.trim(),
      rec_description: e.target.rec_description.value.trim(),
      servings: e.target.servings.value,
      preptime: e.target.preptime.value,
      cooktime: e.target.cooktime.value,
      ingredients: e.target.ingredients.value.trim(),
      instructions: e.target.instructions.value.trim(),
      notes: e.target.notes.value.trim()
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
        <label htmlFor="title">Title<span className="required">*</span></label>
        <input type="text" name="title" id="title" required />
      <label htmlFor="rec_description" className="optional">Description</label>
          <textarea rows="4" cols="50" name="rec_description" id="rec_description"></textarea>
          </div>
          <div className="form-section">    
          <label htmlFor="servings" className="optional">Servings</label><input type="number" name="servings" id="servings" min="0" className="short-text" />
        <label htmlFor="preptime" className="optional">Prep Time</label><input type="number" name="preptime" id="preptime" min="0" className="short-text" /> minutes
            <label htmlFor="cooktime" className="optional">Cook Time</label><input type="number" name="cooktime" id="cooktime" min="0" className="short-text" /> minutes
              </div>
            <div className="form-section">
            <label htmlFor="ingredients">Ingredients<span className="required">*</span> - Please include each ingredient on a separate line.</label>
            <textarea rows="4" cols="50" name="ingredients" id="ingredients" required></textarea>
          </div>
          <div className="form-section">
            <label htmlFor="instructions">Instructions<span className="required">*</span> - Please include each instruction step on a separate line.</label>
            <textarea rows="4" cols="50" name="instructions" id="instructions" required></textarea>
          </div>
          <div className="form-section">
        <label htmlFor="notes" className="optional">Additional Notes</label>
            <textarea rows="4" cols="50" name="notes" id="notes"></textarea>
            </div>
        <button type="submit">Add Recipe</button> <button type="button" onClick={this.handleClickCancel}>Cancel</button>
            </form>
            </>
    )
  }
}
