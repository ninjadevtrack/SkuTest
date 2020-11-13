import { handleActions } from 'redux-actions';

import {
  fetchFilms,
  fetchFilmsSuccess,
  fetchFilmsFailed,
  fetchFilmsFulfill,
} from './actions';

const fetchFilmsHandler = (state, action) => ({
  ...state,
  isLoading: true,
});

const fetchFilmsSuccessHandler = (state, action) => ({
  ...state,
  data: action.payload,
  isSuccess: true,
});

const fetchFilmsFailedHandler = (state, action) => ({
  ...state,
  error: action.payload,
});

const fetchFilmsFulfillHandler = (state, action) => ({
  ...state,
  isLoading: false,
});

export const initialState = {
  isLoading: false,
  isSuccess: false,
  data: [],
  error: {},
};

export default handleActions(
  {
    [fetchFilms]: fetchFilmsHandler,
    [fetchFilmsSuccess]: fetchFilmsSuccessHandler,
    [fetchFilmsFailed]: fetchFilmsFailedHandler,
    [fetchFilmsFulfill]: fetchFilmsFulfillHandler,
  },
  initialState
);
