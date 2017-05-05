/**
 * Created by axa on 05/05/2017.
 */
import React  from 'react';
import {Route, IndexRoute} from 'react-router';
import Home from './components/common/HomePage';
import App from './components/App';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
  </Route>
);