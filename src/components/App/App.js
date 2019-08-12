import React, { Component } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import LandingPage from '../../routes/LandingPage/LandingPage'
import HomePage from '../../routes/HomePage/HomePage'
import AddRecipePage from '../../routes/AddRecipePage/AddRecipePage'
import ViewRecipePage from '../../routes/ViewRecipePage/ViewRecipePage'
import { Route, Switch } from 'react-router-dom'
import MincedContext from '../../contexts/MincedContext';
import config from '../../config';
import './App.css'
class App extends Component {
  state = {
    Recipes: []
  }

  setRecipes = Recipes => {
    this.setState({
      Recipes
    })
  }

  handleGetAllRecipes = () => {
    fetch(config.API_BASE_URL+'recipes/', {
      method: 'GET'
    })
      .then(res => {
        if (!res.ok) {
          return res.json().then(error => Promise.reject(error))
        }
        return res.json()
      })
      .then(this.setRecipes)
      .catch(error => {
        console.error(error)
      })
  }

  handleGetRecipe = (recipeId) => {
    let filteredItem = this.state.Recipes.filter(recipe => { return recipe.id === parseInt(recipeId) });
    return (filteredItem[0]);
  }

  componentDidMount() {
    this.handleGetAllRecipes();
  }

  // Add Recipe
  handleAddNewRecipe = (recipe) => {

    fetch(config.API_BASE_URL+'recipes/', {
      method: 'POST',
      body: JSON.stringify(recipe),
      headers: {
        'content-type': 'application/json',
      }
    })
      .then(res => {
        if (!res.ok) {
          return res.json().then(error => Promise.reject(error))
        }
        return res.json()
      }).then(data => {
          this.handleGetAllRecipes();
        }
      )
      .catch(error => {
        console.error(error)
      })
  }

  // Delete Recipe
  handleDeleteRecipe = (recipeId) => {
    fetch(config.API_BASE_URL+'recipes/'+recipeId, {
      method: 'DELETE'
    })
      .then(res => {
        if (!res.ok) {
          return res.json().then(error => Promise.reject(error))
        }
        this.handleGetAllRecipes();
        return res.json()
      })
      .catch(error => {
        console.error(error)
      })
  }

  render() {
    const contextValue = {
      Recipes: this.state.Recipes,
      handleAddNewRecipe: this.handleAddNewRecipe,
      handleGetAllRecipes: this.handleGetAllRecipes,
      handleDeleteRecipe: this.handleDeleteRecipe,
      handleGetRecipe: this.handleGetRecipe
    }
    return (
      <MincedContext.Provider value={contextValue}>
        <Header />
        <main role="main">
          <Switch>
            <Route
              exact
              path={'/'}
              component={LandingPage}
            />
            <Route
              exact
              path={'/home'}
              component={HomePage}
            />
            <Route
              exact
              path={'/add'}
              component={AddRecipePage}
            />
            <Route
              path={'/recipe/:recipeId'}
              component={ViewRecipePage}
            />
          </Switch>
        </main>
        <Footer />
      </MincedContext.Provider>
    )
  }
}

export default App;