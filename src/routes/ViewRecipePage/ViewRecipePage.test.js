import React from 'react';
import ReactDOM from 'react-dom';
import ViewRecipePage from './ViewRecipePage';
import { BrowserRouter } from 'react-router-dom'

it('ViewRecipePage renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><ViewRecipePage /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});