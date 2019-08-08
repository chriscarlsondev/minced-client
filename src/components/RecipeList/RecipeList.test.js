import React from 'react';
import ReactDOM from 'react-dom';
import RecipeList from './RecipeList';
import { BrowserRouter } from 'react-router-dom'


it('RecipeList renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><RecipeList /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});