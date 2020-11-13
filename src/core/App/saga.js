import { call, take, put } from 'redux-saga/effects';
import get from 'lodash/get';
import * as API from '../../api';

import {
  fetchVersion,
  fetchVersionSuccess,
  fetchVersionFailed,
  fetchVersionFulfill,
} from './actions';

function* onFetchVersionSaga({ payload } = {}) {
  try {
    yield put(fetchVersion(payload));
    const response = yield call(API.fetchPlanets, payload);
    const data = response.data;

    if (!data) {
      throw new Error();
    }

    yield put(fetchVersionSuccess(data));
  } catch (e) {
    yield put(fetchVersionFailed(get(e, 'response.data')));
  } finally {
    yield put(fetchVersionFulfill());
  }
}

function* getAppversionOnce() {
  const action = yield take(fetchVersion);
  yield call(onFetchVersionSaga, action);
}

export default function* appMainSaga() {
  yield call(getAppversionOnce);
}
