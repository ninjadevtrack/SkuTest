import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import history from 'utils/history';
import globalReducer from 'core/App/reducers';
import planetReducer from 'core/Planets/reducers';

export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    global: globalReducer,
    planet: planetReducer,
    ...injectedReducers,
  });

  return connectRouter(history)(rootReducer);
}
