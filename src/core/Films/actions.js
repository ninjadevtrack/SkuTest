import { createAction } from 'redux-actions';

export const fetchFilms = createAction(`FETCH_RESIDENTS_REQUEST`);
export const fetchFilmsSuccess = createAction(`FETCH_RESIDENTS_SUCCESS`);
export const fetchFilmsFailed = createAction(`FETCH_RESIDENTS_FAILED`);
export const fetchFilmsFulfill = createAction(`FETCH_RESIDENTS_FULFILL`);
