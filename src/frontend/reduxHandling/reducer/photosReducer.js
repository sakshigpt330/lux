export default function reducer(state = {
  pics: '',
}, action) {
  switch (action.type) {
    case 'PHOTOS_INITATED': {
      return { ...state, changingStatus: 'uninitiated' };
    }
    case 'PHOTOS_STARTED': {
      return { ...state, changingStatus: 'ongoing' };
    }
    case 'PHOTOS_SUCCESS': {
      return { ...state, changingStatus: 'success', pics: action.payload };
    }
    case 'PHOTOS_FAILED': {
      return { ...state, changingStatus: 'failed' };
    }
    default: {
      return state;
    }
  }
}
