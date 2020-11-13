import { call, take, put } from 'redux-saga/effects';
import get from 'lodash/get';
import * as API from '../../api';

import {
  fetchResidents,
  fetchResidentsSuccess,
  fetchResidentsFailed,
  fetchResidentsFulfill,
} from './actions';

function* onFetchResidents({ payload } = {}) {
  try {
    yield put(fetchResidents());
    const { residentUrls } = payload;
    const response = yield call(API.fetchResidents, payload);
    if (!response.data) {
      throw new Error();
    }

    const data = response.data.results;
    const result = data.filter((item) => residentUrls.includes(item.url));
    yield put(fetchResidentsSuccess(result));
  } catch (e) {
    yield put(fetchResidentsFailed(get(e, 'response.data')));
  } finally {
    yield put(fetchResidentsFulfill());
  }
}

function* getResidentsOnce() {
  const action = yield take(fetchResidents);
  yield call(onFetchResidents, action);
}

export default function* Residentsaga() {
  yield call(getResidentsOnce);
}
