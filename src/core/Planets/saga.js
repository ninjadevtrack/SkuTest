import { call, take, put } from 'redux-saga/effects';
import get from 'lodash/get';
import * as API from '../../api';

import {
  fetchPlanets,
  fetchPlanetsSuccess,
  fetchPlanetsFailed,
  fetchPlanetsFulfill,
} from './actions';

function* onFetchPlanets({ payload } = {}) {
  try {
    yield put(fetchPlanets(payload));
    const response = yield call(API.fetchPlanets, payload);
    const data = response.data;

    if (!data) {
      throw new Error();
    }

    yield put(fetchPlanetsSuccess(data));
  } catch (e) {
    yield put(fetchPlanetsFailed(get(e, 'response.data')));
  } finally {
    yield put(fetchPlanetsFulfill());
  }
}

function* getPlanetsOnce() {
  const action = yield take(fetchPlanets);
  yield call(onFetchPlanets, action);
}

export default function* planetSaga() {
  yield call(getPlanetsOnce);
}
