import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { render } from 'react-dom';
// styles
import './index.css';
// components
import App from './components/App';

render(
  <BrowserRouter>
    <Route component={App} />
  </BrowserRouter>,
  document.getElementById('root'),
);
