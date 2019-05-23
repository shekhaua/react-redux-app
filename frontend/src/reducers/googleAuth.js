import {GOOGLE_SIGN_IN, GOOGLE_SIGN_OUT} from "../actions/googleAuth";

const INITIAL_STATE = {
  userSignedIn: null,
  user: {}
};

export const googleAuthReducer = (currentState = INITIAL_STATE, action) => {
  switch (action.type) {
    case GOOGLE_SIGN_IN:
      return {...currentState, userSignedIn: true, user: action.payload};
    case GOOGLE_SIGN_OUT:
      return {...currentState, userSignedIn: false, user: {}};
    default:
      return currentState;
  }
};