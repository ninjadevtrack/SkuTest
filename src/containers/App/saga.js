import { put, call, fork, takeLatest } from 'redux-saga/effects';
import { CHECK_CONVERSION } from 'containers/App/constants';
import {
  checkConversionSucceeded,
  checkConversionFailed
} from 'containers/App/actions';
import request, { makeJsonRequestOptions } from 'utils/request';

/**
 * Base saga
 */
export function* appApiSaga(options, successHandlers, errorHandler) {
  try {
    options.headers = {
      ...options.headers,
    };
    const response = yield call(request, options);
    for (let i = 0; i < successHandlers.length; i++) {
      yield put(successHandlers[i](response.data));
    }
  } catch(err) {
    const { response: errResponse } = err;
    yield put(errorHandler(errResponse.data));
  }
}

/**
 * CHECK_CONVERSION saga
 */
export function* checkConversion(action) {
  const options = makeJsonRequestOptions({
    method: 'POST',
    requestUrlPath: 'conversion/check',
    data: action.payload
  });

  yield call(appApiSaga, options, [checkConversionSucceeded], checkConversionFailed);
}

export function* checkConversionWatcher() {
  yield takeLatest(CHECK_CONVERSION, checkConversion);
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* appMainSaga() {
  yield fork(checkConversionWatcher);
}
