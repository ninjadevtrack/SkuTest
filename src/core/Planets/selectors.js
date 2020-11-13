import { createSelector } from 'reselect';

const selectPlanet = (state) => state.planet;
const makeSelectPlanets = () =>
  createSelector(selectPlanet, (planetState) => planetState?.data);
const getLoadingStatus = () =>
  createSelector(selectPlanet, (planetState) => planetState?.isLoading);
const getFetchingStatus = () =>
  createSelector(selectPlanet, (planetState) => planetState?.isSuccess);

export { makeSelectPlanets, getLoadingStatus, getFetchingStatus };
