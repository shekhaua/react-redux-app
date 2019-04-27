import {UserActions} from "../actions";

export const usersReducer = (currentState = [], action) => {
  switch(action.type){
    case UserActions.fetchUser:
      return [...currentState, action.payload];
    default:
      return currentState;
  }
};