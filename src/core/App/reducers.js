// import { handleActions } from 'redux-actions';

import { fetchVersion } from './actions';

const fetchVersionHandler = (state, action) => ({
  ...state,
  isLoading: true,
});

export const initialState = {
  isLoading: false,
  isSuccess: false,
  data: {},
  error: {},
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case fetchVersion:
      return fetchVersionHandler(state, action);
    default:
      return state;
  }
}

export default appReducer;
