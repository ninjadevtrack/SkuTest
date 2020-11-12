import { handleActions } from 'redux-actions';

import { fetchPlanets } from './actions';

const initialState = [];

const fetchPlanetsRequest = (state, { payload: { domain, fields } }) => ({
  ...state,
  [domain]: fields,
});

//- Reducers
export default handleActions(
  {
    [fetchPlanets]: fetchPlanetsRequest,
  },
  initialState
);
