import React, { Component } from 'react'
import MincedContext from '../../contexts/MincedContext';
import RecipeListItem from '../RecipeListItem/RecipeListItem';

export default class RecipeList extends Component {
  static defaultProps = {
    Recipes: [],
  };
  
  static contextType = MincedContext;

  render() {
    let Recipes = this.context.Recipes;
    return(
      <>
        {Recipes.map((recipe, i) =>
          <RecipeListItem
            key={i}
            {...recipe}
          />)}
      </>
    )
  }
}