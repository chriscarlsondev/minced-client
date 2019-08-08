import React from 'react';
import ReactDOM from 'react-dom';
import AddRecipePage from './AddRecipePage';

it('AddRecipePage renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddRecipePage />, div);
  ReactDOM.unmountComponentAtNode(div);
});