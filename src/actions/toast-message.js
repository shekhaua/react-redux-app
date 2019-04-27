export const ToastMessageActions = {
  show: "SHOW_TOAST_MESSAGE",
  headerText: 'HEADER_TEXT',
  headerInfo: 'HEADER_INFO',
  message: 'TOAST_MESSAGE'
};

export const setToastMessageHeader = (text) => {
  return {
    type: ToastMessageActions.headerText,
    payload: text
  }
};

export const setToastMessageHeaderInfo = (info) => {
  return {
    type: ToastMessageActions.headerInfo,
    payload: info
  };
};

export const setToastMessage = (message) => {
  return {
    type: ToastMessageActions.message,
    payload: message
  };
};

export const showToastMessage = (show) => {
  return {
    type: ToastMessageActions.show,
    payload: show
  }
};