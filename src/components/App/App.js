import React, { Component } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import LandingPage from '../../routes/LandingPage/LandingPage'
import HomePage from '../../routes/HomePage/HomePage'
import AddRecipePage from '../../routes/AddRecipePage/AddRecipePage'
import ViewRecipePage from '../../routes/ViewRecipePage/ViewRecipePage'
import { Route, Switch } from 'react-router-dom'
import MincedContext from '../../MincedContext';
import './App.css'
import config from '../../config';
class App extends Component {

  state = {
    Recipes: [],
  }

  setRecipes = Recipes => {
    this.setState({
      Recipes
    })
  }

  getAllRecipes = () => {
  }

  componentDidMount() {
    this.getAllRecipes();
  }

  // Add Recipe
  handleAddNewRecipe = (recipe) => {

  }

  // Delete Recipe
  handleDeleteRecipe = (recipeID) => {

  }

  render() {
    const contextValue = {
      Recipes: this.state.Recipes,
      handleAddNewRecipe: this.handleAddNewRecipe,
      handleAddCategory: this.handleAddCategory,
      handleDeleteRecipe: this.handleDeleteRecipe,
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
              exact
              path={'/view'}
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