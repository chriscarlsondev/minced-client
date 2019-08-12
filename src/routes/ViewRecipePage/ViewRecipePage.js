import React, { Component } from 'react'
import MincedContext from '../../contexts/MincedContext';
export default class ViewRecipePage extends Component {
  static contextType = MincedContext;
  
  handleDelete = e => {
    e.preventDefault();
    this.context.handleDeleteRecipe(this.props.match.params.recipeId);
    this.props.history.push('/home');
  }

  render() {
    const { recipeId } = this.props.match.params
    let Recipe = this.context.handleGetRecipe(recipeId);
    if (Recipe) {
      let ingredients = Recipe.ingredients.split('\n').map((item, i) => {
        return <li key={i}>{item}</li>;
      });
      let instructions = Recipe.instructions.split('\n').map((item, i) => {
        return <li key={i}>{item}</li>;
      });
      return (
      <section>
      <header>
          <h2>{Recipe.title}</h2>
      </header>
      <div className="form-section">
          <h3>Description</h3>
          <p>{Recipe.rec_description}</p>
        </div>
        <div className="form-section">
          <h3>Servings</h3>
          <p>{Recipe.servings}</p>
        </div>
        <div className="form-section">
          <h3>Prep Time</h3>
          <p>{Recipe.preptime}</p>
        </div>
        <div className="form-section">
          <h3>Cook Time</h3>
          <p>{Recipe.cooktime}</p>
        </div>
        <div className="form-section">
          <h3>Ingredients</h3>
              <ul className="ingredients-list">{ingredients}</ul>
        </div>
        <div className="form-section">
          <h3>Instructions</h3>
              <ol>{instructions}</ol>
        </div>

        <div className="form-section">
          <h3>Additional Notes</h3>
          <p>{Recipe.notes}</p>
          </div>
          <form>
          <button type="button" onClick={this.handleDelete}>Delete Recipe</button>
            </form>
    </section>
      )
    } else {
      return (<></>)
    }
  }
}
