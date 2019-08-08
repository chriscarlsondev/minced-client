import React from 'react';
import ReactDOM from 'react-dom';
import RecipeListItem from './RecipeListItem';
import { BrowserRouter } from 'react-router-dom'

it('RecipeListItem renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><RecipeListItem /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});