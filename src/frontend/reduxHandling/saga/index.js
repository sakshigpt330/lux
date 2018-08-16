import { all } from 'redux-saga/effects';

import { PHOTOS } from './photosSaga';

// Wrap all sagas in a container
const rootSaga = function* rootSaga() {
  yield all([
    PHOTOS(),
  ]);
};

export default rootSaga;
