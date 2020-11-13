import { createAction } from 'redux-actions';

export const fetchResidents = createAction(`FETCH_FILMS_REQUEST`);
export const fetchResidentsSuccess = createAction(`FETCH_FILMS_SUCCESS`);
export const fetchResidentsFailed = createAction(`FETCH_FILMS_FAILED`);
export const fetchResidentsFulfill = createAction(`FETCH_FILMS_FULFILL`);
