let auth = null;

export const GET_USER_PROFILE = 'GET_USER_PROFILE';


export function getUserProfile() {
  return {
    type: GET_USER_PROFILE,
    payload: {}
  }
}