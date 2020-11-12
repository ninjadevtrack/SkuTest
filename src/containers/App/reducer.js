import {
  CHECK_CONVERSION,
  CHECK_CONVERSION_SUCCESS,
  CHECK_CONVERSION_ERROR
} from './constants';

const initialState = {
  checkConversion: {
    submitting: null,
    error: null,
    result: null
  }
};

function appReducer(state = initialState, action) {
  const { error, result } = action.payload || {};

  switch (action.type) {
    case CHECK_CONVERSION:
      return {
        ...state,
        checkConversion: {
          submitting: true,
          error: false,
          result: null
        }
      };
    case CHECK_CONVERSION_SUCCESS:
      return {
        ...state,
        checkConversion: {
          submitting: false,
          error: false,
          result
        }
      };
    case CHECK_CONVERSION_ERROR:
      return {
        ...state,
        checkConversion: {
          submitting: false,
          error,
          result: null
        }
      };
    default:
      return state;
  }
}

export default appReducer;
