import * as CONSTANTS from './constants';

const loadAllPlanets = () => {
  return {
    type: CONSTANTS.LOAD_PLANETS,
  }
};

const actions = {
  loadAllPlanets,
};

export default actions;