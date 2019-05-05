import {GOOGLE_SIGN_IN, GOOGLE_SIGN_OUT} from "../actions/googleAuth";

const INITIAL_STATE = {
  userSignedIn: null,
  userId: null
};

export const googleAuthReducer = (currentState = INITIAL_STATE, action) => {
  switch (action.type) {
    case GOOGLE_SIGN_IN:
      return {...currentState, userSignedIn: true, userId: action.userId};
    case GOOGLE_SIGN_OUT:
      return {...currentState, userSignedIn: false, userId: null};
    default:
      return currentState;
  }
};