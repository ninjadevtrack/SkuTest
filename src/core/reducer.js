import * as CONSTANTS from './constants';

const INITIAL_STATE = {
  planets: {
    firstName: '',
    lastName: '',
    email: '',
    ccNumber: '',
    ccType: '',
    total: 0,
  },
};

function appReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CONSTANTS.LOAD_PLANETS:
      return { ...state };
    default:
      return state;
  }
}

export default appReducer;
