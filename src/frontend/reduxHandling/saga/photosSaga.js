import { put, takeEvery, call } from 'redux-saga/effects';
import ApiCaller from '../devApiCaller';

const API_DATA = () => (
  ApiCaller('photos', 'get').then(response => response)
);

export const PHOTOS = function* random_pics() {
  yield takeEvery('PHOTOS', function* (action) {
    yield put({ type: 'PHOTOS_STARTED' });
    try {
      const DATA = yield call(API_DATA.bind(this));
      yield put({ type: 'PHOTOS_SUCCESS', payload: DATA });
    } catch (error) {
      yield put({ type: 'PHOTOS_FAILED' });
    }
  });
};
