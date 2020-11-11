import { createStore } from 'redux';
import reducer from './reducer';

function configureStore(initialState) {
  const store = createStore(
    reducer,
    initialState,
  );

  return store;
};

export default configureStore;