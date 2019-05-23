export const SET_SIGNED_USER = 'GET_SIGNED_USER';

export function setSignedUser(signedUser) {
  return (dispatch, getState) => {
    dispatch({
      type: SET_SIGNED_USER,
      payload: signedUser
    });
  };
}