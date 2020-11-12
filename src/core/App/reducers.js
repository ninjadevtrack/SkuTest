import {
  FETCH_PLANETS,
  FETCH_PLANETS_SUCCESS,
  FETCH_PLANETS_ERROR,
} from './constants';

const initialState = {
  planets: {
    loading: null,
    error: null,
    data: null,
  },
};

function appReducer(state = initialState, action) {
  const { error, planets } = action.payload || {};

  switch (action.type) {
    case FETCH_PLANETS:
      return {
        ...state,
        planets: {
          loading: true,
          error: false,
          data: null,
        },
      };
    case FETCH_PLANETS_SUCCESS:
      return {
        ...state,
        planets: {
          loading: false,
          error: false,
          data: planets,
        },
      };
    case FETCH_PLANETS_ERROR:
      return {
        ...state,
        planets: {
          loading: false,
          error,
          data: null,
        },
      };
    default:
      return state;
  }
}

export default appReducer;
