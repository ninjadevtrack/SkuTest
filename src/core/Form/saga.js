import { call, take, put } from 'redux-saga/effects';
import get from 'lodash/get';
// import * as API from '../../api';

import {
  changeFormData,
  changeSuccess,
  changeFailed,
  changeFulfill,
} from './actions';

function* onChangeForm({ payload } = {}) {
  try {
    yield put(changeFormData());
    // const response = yield call(API.changeForm, payload);
    const response = Math.random() > 0.5 ? true : false;
    console.log('passed saga', response);
    if (!response) {
      throw new Error();
    }

    yield put(changeSuccess(response));
  } catch (e) {
    yield put(changeFailed(get(e, 'response')));
  } finally {
    yield put(changeFulfill());
  }
}

function* changeFormOnce() {
  const action = yield take(changeFormData);
  yield call(onChangeForm, action);
}

export default function* Filmsaga() {
  yield call(changeFormOnce);
}
