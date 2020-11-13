import { handleActions } from 'redux-actions';

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

export default handleActions(
  {
    [fetchPlanets]: fetchPlanetsRequest,
    [fetchPlanetsSuccess]: fetchPlanetsSuccessRequest,
    [fetchPlanetsFailed]: fetchPlanetsFailedRequest,
    [fetchPlanetsFulfill]: fetchPlanetsFulfillRequest,
  },
  initialState
);
