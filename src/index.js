// Set up your application entry point here...
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import '../node_modules/materialize-css/dist/css/materialize.css';
import '../node_modules/materialize-css/dist/js/materialize';
import '../src/styles/styles.scss';

render(
  <Router routes={routes} history={browserHistory} />,
  document.getElementById('app')
);

