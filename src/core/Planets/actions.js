import { createAction } from 'redux-actions';

export const fetchPlanets = createAction(`FETCH_PLANETS_REQUEST`);
export const fetchPlanetsSuccess = createAction(`FETCH_PLANETS_SUCCESS`);
export const fetchPlanetsFailed = createAction(`FETCH_PLANETS_FAILED`);
export const fetchPlanetsFulfill = createAction(`FETCH_PLANETS_FULFILL`);
