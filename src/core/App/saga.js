import { put, call, fork, takeLatest } from 'redux-saga/effects';
import { FETCH_PLANETS } from './constants';
import {
  fetchPlanets,
  fetchPlanetsSucceeded,
  fetchPlanetsFailed,
} from './actions';

import request, { makeJsonRequestOptions } from 'utils/request';

export function* appApiSaga(options, successHandlers, errorHandler) {
  try {
    options.headers = {
      ...options.headers,
    };
    const response = yield call(request, options);
    for (let i = 0; i < successHandlers.length; i++) {
      yield put(successHandlers[i](response.data));
    }
  } catch (err) {
    const { response: errResponse } = err;
    yield put(errorHandler(errResponse.data));
  }
}

export function* fetchPlanetsHandler() {
  const options = makeJsonRequestOptions({
    method: 'GET',
    requestUrlPath: 'planets',
  });

  yield call(appApiSaga, options, [fetchPlanetsSucceeded], fetchPlanetsFailed);
}

export function* fetchPlanetsWatcher() {
  yield takeLatest(FETCH_PLANETS, fetchPlanetsHandler);
}

export default function* appMainSaga() {
  yield fork(fetchPlanetsWatcher);
}
