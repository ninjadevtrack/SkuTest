import { createAction } from 'redux-actions';

export const fetchFilms = createAction(`FETCH_FILMS_REQUEST`);
export const fetchFilmsSuccess = createAction(`FETCH_FILMS_SUCCESS`);
export const fetchFilmsFailed = createAction(`FETCH_FILMS_FAILED`);
export const fetchFilmsFulfill = createAction(`FETCH_FILMS_FULFILL`);
