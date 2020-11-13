import { call, take, put } from 'redux-saga/effects';
import get from 'lodash/get';
import * as API from '../../api';

import {
  fetchFilms,
  fetchFilmsSuccess,
  fetchFilmsFailed,
  fetchFilmsFulfill,
} from './actions';

function* onFetchFilms({ payload } = {}) {
  try {
    yield put(fetchFilms());
    const { filmUrls } = payload;
    const response = yield call(API.fetchFilms, payload);
    if (!response.data) {
      throw new Error();
    }

    const data = response.data.results;
    const result = data.filter((item) => filmUrls.includes(item.url));
    yield put(fetchFilmsSuccess(result));
  } catch (e) {
    yield put(fetchFilmsFailed(get(e, 'response.data')));
  } finally {
    yield put(fetchFilmsFulfill());
  }
}

function* getFilmsOnce() {
  const action = yield take(fetchFilms);
  yield call(onFetchFilms, action);
}

export default function* Filmsaga() {
  yield call(getFilmsOnce);
}
