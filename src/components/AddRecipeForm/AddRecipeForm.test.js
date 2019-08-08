import React from 'react';
import ReactDOM from 'react-dom';
import AddRecipeForm from './AddRecipeForm';

it('AddRecipeForm renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddRecipeForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});