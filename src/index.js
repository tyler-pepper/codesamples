import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import AnagramApp from './Reducers';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

let store = createStore(AnagramApp);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
