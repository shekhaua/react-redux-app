import {SET_SIGNED_USER} from '../actions/signedUser';

const INITIAL_STATE = {
  id: null,
  imageUrl: null,
  email: null,
  familyName: null,
  givenName: null,
  name: null
};

export function signedUserReducer(currentState = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_SIGNED_USER:
      return action.payload;
    default:
      return currentState;
  }
}