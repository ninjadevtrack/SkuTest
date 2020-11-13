import { handleActions } from 'redux-actions';

import {
  fetchResidents,
  fetchResidentsSuccess,
  fetchResidentsFailed,
  fetchResidentsFulfill,
} from './actions';

const fetchResidentsHandler = (state, action) => ({
  ...state,
  isLoading: true,
});

const fetchResidentsSuccessHandler = (state, action) => ({
  ...state,
  data: action.payload,
  isSuccess: true,
});

const fetchResidentsFailedHandler = (state, action) => ({
  ...state,
  error: action.payload,
});

const fetchResidentsFulfillHandler = (state, action) => ({
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
    [fetchResidents]: fetchResidentsHandler,
    [fetchResidentsSuccess]: fetchResidentsSuccessHandler,
    [fetchResidentsFailed]: fetchResidentsFailedHandler,
    [fetchResidentsFulfill]: fetchResidentsFulfillHandler,
  },
  initialState
);
