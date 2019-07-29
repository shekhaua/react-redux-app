import { CREATE_STREAM, GET_STREAM, GET_STREAMS, DELETE_STREAM, UPDATE_STREAM} from '../actions/streamy';

import mapKeys from 'lodash.mapkeys';
import omit from 'lodash.omit';

export default function streamyReducer(currentState = {}, { type, payload }) {
  switch (type) {
    case GET_STREAMS:
      return {...currentState, ...mapKeys(payload, 'id')};
    case CREATE_STREAM:
    case GET_STREAM:
    // in case of single stream the reducer's array like object will contain a single steam
    // the same object will be used for streams and a single stream in state
    // eslint-disable-next-line no-fallthrough
      return {[payload.id]: payload};
    case UPDATE_STREAM:
      return {...currentState, [payload.id]: payload};
    case DELETE_STREAM:
      return omit(currentState, payload); //{...currentState, payload: undefined};
    default:
      return currentState;
  }
}