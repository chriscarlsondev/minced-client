import React, { Component } from 'react'
import MincedContext from '../../contexts/MincedContext';
import RecipeListItem from '../RecipeListItem/RecipeListItem';
import RecipesApiService from '../../services/recipe-api-service'

export default class RecipeList extends Component {
    static defaultProps = {
        Recipes: [],
      };
      
      static contextType = MincedContext;
    
    
      componentDidMount() {
      }
    
      render() {
        let Recipes = RecipesApiService.getRecipes();
          return <>
              {Recipes.map((recipe, i) =>
        <RecipeListItem
          key={i}
          {...recipe}
                />)}
        </>
      }
    }