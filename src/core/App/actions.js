import {
  FETCH_PLANETS,
  FETCH_PLANETS_SUCCESS,
  FETCH_PLANETS_ERROR,
} from './constants';

export function fetchPlanets() {
  return {
    type: FETCH_PLANETS,
    payload: {},
  };
}

export function fetchPlanetsSucceeded({ planets }) {
  return {
    type: FETCH_PLANETS_SUCCESS,
    payload: { planets },
  };
}

export function fetchPlanetsFailed(error) {
  return {
    type: FETCH_PLANETS_ERROR,
    payload: { error },
  };
}
