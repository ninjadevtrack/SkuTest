import { createSelector } from 'reselect';

const selectResident = (state) => state.resident;
const makeSelectResidents = () =>
  createSelector(selectResident, (ResidentState) => ResidentState?.data);
const getLoadingStatus = () =>
  createSelector(selectResident, (ResidentState) => ResidentState?.isLoading);
const getFetchingStatus = () =>
  createSelector(selectResident, (ResidentState) => ResidentState?.isSuccess);

export { makeSelectResidents, getLoadingStatus, getFetchingStatus };
