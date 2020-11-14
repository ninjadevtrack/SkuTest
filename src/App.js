import '@babel/polyfill';

import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { ToastProvider } from 'react-toast-notifications';
import history from 'utils/history';

import App from 'containers/App';
import configureStore from 'core/store';
const initialState = {};
const store = configureStore(initialState, history);

export default () => (
  <Provider store={store}>
    <ToastProvider>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </ToastProvider>
  </Provider>
);
