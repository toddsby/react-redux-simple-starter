import React from 'react';
import Page from './modules/partials/page.view.js';
import Home from './modules/home/home.index';
import About from './modules/about/about.view';
import { Route, IndexRoute } from 'react-router';

export default (
  <Route path="/" component={ Page }>
    <IndexRoute component={ Home }></IndexRoute>
    <Route path="about" component={ About }/>
  </Route>
);