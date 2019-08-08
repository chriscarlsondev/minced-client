import React, { Component } from 'react'
import MincedContext from '../../contexts/MincedContext';
import RecipesApiService from '../../services/recipe-api-service'
export default class ViewRecipePage extends Component {
    static contextType = MincedContext;

    componentDidMount() {

        // .then(this.context.setRecipe)
        // .catch(this.context.setError)
    }

    render() {
        const { recipeId } = this.props.match.params
        let Recipe = RecipesApiService.getRecipe(recipeId);
        return (

<section>
        <header>
            <h2>{Recipe.title}</h2>
        </header>
        <div className="form-section">
            <h3>Description</h3>
            <p>{Recipe.description}</p>
          </div>
          <div className="form-section">
            <h3>Servings</h3>
            <p>{Recipe.serves}</p>
          </div>
          <div className="form-section">
            <h3>Prep Time</h3>
            <p>{Recipe.prep_time}</p>
          </div>
          <div className="form-section">
            <h3>Cook Time</h3>
            <p>{Recipe.cook_time}</p>
          </div>
          <div className="form-section">
            <h3>Ingredients</h3>
                <p>{Recipe.ingredients}</p>
          </div>
          <div className="form-section">
            <h3>Instructions</h3>
                {Recipe.instructions}
          </div>

          <div className="form-section">
            <h3>Additional Notes</h3>
            <p>{Recipe.notes}</p>
          </div>
      </section>
        )
    }
}
