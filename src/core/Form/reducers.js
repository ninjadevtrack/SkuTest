import { handleActions } from 'redux-actions';

import {
  changeFormData,
  changeSuccess,
  changeFailed,
  changeFulfill,
} from './actions';

const changeFormDataHandler = (state, action) => ({
  ...state,
  isLoading: true,
});

const changeFormSuccessHandler = (state, action) => ({
  ...state,
  data: action.payload,
  isSuccess: true,
});

const changeFormFailedHandler = (state, action) => ({
  ...state,
  error: action.payload,
  isFailed: true,
});

const changeFormFulfillHandler = (state, action) => ({
  ...state,
  isLoading: false,
  isSuccess: false,
  isFailed: false,
});

export const initialState = {
  isLoading: false,
  isSuccess: false,
  isFailed: false,
  data: [],
  error: {},
};

export default handleActions(
  {
    [changeFormData]: changeFormDataHandler,
    [changeSuccess]: changeFormSuccessHandler,
    [changeFailed]: changeFormFailedHandler,
    [changeFulfill]: changeFormFulfillHandler,
  },
  initialState
);
