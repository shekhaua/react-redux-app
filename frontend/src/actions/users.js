import {fetchUser} from "../api/JsonPlaceholder";

export const UserActions = {
  fetchUser: 'FETCH_USER'
};

export const getUser = (userId) => async (dispatch /*, getState*/) => {
  const user = await fetchUser(userId);

  dispatch({
    type: UserActions.fetchUser,
    payload: user
  });
};