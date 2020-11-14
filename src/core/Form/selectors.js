import { createSelector } from 'reselect';

const selectForm = (state) => state.form;
const getLoadingStatus = () =>
  createSelector(selectForm, (formState) => formState?.isSuccess);
const getFailedStatus = () =>
  createSelector(selectForm, (formState) => formState?.isFailed);

export { getLoadingStatus, getFailedStatus };
