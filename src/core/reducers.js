import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import history from 'utils/history';
import globalReducer from 'core/App/reducers';
import planetReducer from 'core/Planets/reducers';
import filmReducer from 'core/Films/reducers';

export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    global: globalReducer,
    planet: planetReducer,
    film: filmReducer,
    ...injectedReducers,
  });

  return connectRouter(history)(rootReducer);
}
