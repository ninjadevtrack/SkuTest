import { createSelector } from 'reselect';

const selectGlobal = (state) => state.global;
const makeSelectPlanets = () =>
  createSelector(selectGlobal, (globalState) => globalState.planets);

export { makeSelectPlanets };
