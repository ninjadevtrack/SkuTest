import { createAction } from 'redux-actions';

export const fetchVersion = createAction(`FETCH_APP_VERSION`);
export const fetchVersionSuccess = createAction(`FETCH_APP_VERSION_SUCCESS`);
export const fetchVersionFailed = createAction(`FETCH_APP_VERSION_FAILED`);
export const fetchVersionFulfill = createAction(`FETCH_APP_VERSION_FULFILL`);
