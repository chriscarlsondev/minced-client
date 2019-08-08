import React, { Component } from 'react'

export default class AddRecipeForm extends Component {
    render() {
        return (
            <>
        <header>
            <h2>Add Recipe</h2>
        </header>
         <form id="add-new-task">
          <div className="form-section">
            <h3>Title</h3>
            <input type="text" name="recipe-title" required />
          </div>
          <div className="form-section">
            <h3>Description</h3>
            <textarea rows="4" cols="50" name="description"></textarea>
          </div>
          <div className="form-section">
            <h3>Prep Time</h3>
            <input type="text" name="prep-time" />
          </div>
          <div className="form-section">
            <h3>Cook Time</h3>
            <input type="text" name="cook-time" />
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
            <textarea rows="4" cols="50" name="additional-notes"></textarea>
          </div>
          <div className="form-section">
            <button type="submit">Add Recipe</button>
          </div>
                </form>
                </>
        )
    }
}
