import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';


const history = createBrowserHistory();
ReactDOM.render(
  <Router history={history}>
      <App />
  </Router>, document.getElementById('root'));
registerServiceWorker();
