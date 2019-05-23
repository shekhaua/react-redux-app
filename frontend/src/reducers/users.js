import {UserActions} from "../actions/index";

export const usersReducer = (currentState = [], action) => {
  switch(action.type){
    case UserActions.fetchUser:
      return [...currentState, action.payload];
    default:
      return currentState;
  }
};