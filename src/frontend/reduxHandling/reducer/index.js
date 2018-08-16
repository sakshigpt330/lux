import { combineReducers } from 'redux';

import photos from './photosReducer';

// Wrap all reducers in a container
export default combineReducers({
  photos,
});
