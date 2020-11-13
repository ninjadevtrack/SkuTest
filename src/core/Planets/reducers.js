// import { handleActions } from 'redux-actions';

import {
  fetchPlanets,
  fetchPlanetsSuccess,
  fetchPlanetsFailed,
  fetchPlanetsFulfill,
} from './actions';

const fetchPlanetsRequest = (state, action) => ({
  ...state,
  isLoading: true,
});

const fetchPlanetsSuccessRequest = (state, action) => ({
  ...state,
  data: action.payload,
  isSuccess: true,
});

const fetchPlanetsFailedRequest = (state, action) => ({
  ...state,
  error: action.payload,
});

const fetchPlanetsFulfillRequest = (state, action) => ({
  ...state,
  isLoading: false,
});

export const initialState = {
  isLoading: false,
  isSuccess: false,
  data: {},
  error: {},
};

function planetReducer(state = initialState, action) {
  switch (action.type) {
    case fetchPlanets:
      return fetchPlanetsRequest(state, action);
    case fetchPlanetsSuccess:
      return fetchPlanetsSuccessRequest(state, action);
    case fetchPlanetsFailed:
      return fetchPlanetsFailedRequest(state, action);
    case fetchPlanetsFulfill:
      return fetchPlanetsFulfillRequest(state, action);
    default:
      return state;
  }
}

export default planetReducer;
