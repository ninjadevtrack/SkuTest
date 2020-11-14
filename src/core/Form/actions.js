import { createAction } from 'redux-actions';

export const changeFormData = createAction(`FORM_DATA_CHANGE`);
export const changeSuccess = createAction(`FORM_DATA_CHANGE_SUCCESS`);
export const changeFailed = createAction(`FORM_DATA_CHANGE_FAILED`);
export const changeFulfill = createAction(`FORM_DATA_CHANGE_FULFILL`);
