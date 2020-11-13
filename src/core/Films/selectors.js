import { createSelector } from 'reselect';

const selectFilm = (state) => state.film;
const makeSelectFilms = () =>
  createSelector(selectFilm, (filmState) => filmState?.data);
const getLoadingStatus = () =>
  createSelector(selectFilm, (filmState) => filmState?.isLoading);
const getFetchingStatus = () =>
  createSelector(selectFilm, (filmState) => filmState?.isSuccess);

export { makeSelectFilms, getLoadingStatus, getFetchingStatus };
