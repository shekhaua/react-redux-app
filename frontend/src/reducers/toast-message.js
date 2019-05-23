import {ToastMessageActions} from "../actions/index";

const initialState = {
  show: false,
  headerText: '',
  headerInfo: '',
  autoCloseTimeMs: 3000
};

export const toastMessageReducer = (currentState = initialState, action) => {
  switch (action.type) {
    case ToastMessageActions.show:
      return {...currentState, show: action.payload};
    case ToastMessageActions.headerText:
      return {...currentState, headerText: action.payload};
    case ToastMessageActions.headerInfo:
      return {...currentState, headerInfo: action.payload};
    case ToastMessageActions.message:
      return {...currentState, message: action.payload};
    default:
      return currentState;
  }
};