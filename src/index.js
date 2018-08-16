import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './frontend/routes';
import registerServiceWorker from './registerServiceWorker';
import Store from './frontend/reduxHandling/store';

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
