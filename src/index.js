import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, hashHistory} from 'react-router'
import store from './store/index';
import DevTools from './store/devTools'
import registerServiceWorker from './registerServiceWorker';
import routes from './routes';

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Router history={hashHistory} routes={routes}/>
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('root'));


registerServiceWorker();
