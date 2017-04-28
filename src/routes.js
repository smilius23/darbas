import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import StartPage from './containers/startPage/StartPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={StartPage} />
  </Route>
);
