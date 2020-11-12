import { call, take, put } from 'redux-saga/effects';
import get from 'lodash/get';
import * as API from '../../api';

import { fetchPlanets } from './actions';

function* onFetchPlanets({ payload } = {}) {
  try {
    yield put(fetchPlanets(payload));

    const response = yield call(API.fetchPlanets, payload);
    const data = response.data;

    if (!data) {
      throw new Error();
    }

    yield put(fetchPlanets.SUCCESS(data));
  } catch (e) {
    yield put(fetchPlanets.FAILURE(get(e, 'response.data')));
  } finally {
    yield put(fetchPlanets.FULFILL());
  }
}

function* getPlanetsOnce() {
  const action = yield take(fetchPlanets.TRIGGER);
  yield call(onFetchPlanets, action);
}

export default function* planetsSagas() {
  yield call(getPlanetsOnce);
}
