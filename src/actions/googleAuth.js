const clientId = '146740294915-0v55b19e3otqmk2aqbl7ic10c393saoc.apps.googleusercontent.com';
const scope = 'email';
const api = window.gapi;
let auth = null;

export const GOOGLE_SIGN_IN = 'GOOGLE_SIGN_IN';
export const GOOGLE_SIGN_OUT = 'GOOGLE_SIGN_OUT';

export function initGoogleAuth() {
  return async (dispatch) => {
    await loadAndInitAuth(dispatch).then(() => {
      auth = api.auth2.getAuthInstance();
      auth.isSignedIn.listen(() => {
        onStatusChange(dispatch, auth.isSignedIn.get(), null);
      });
    });
    onStatusChange(dispatch, auth.isSignedIn.get(), null);
  };
}

export function tryToSignIn() {
  return (/*dispatch, getState*/) => {
    auth.signIn().then(() => {
      console.log('Signed in');
    });
  };
}

export function tryToSignOut() {
  return (/*dispatch, getState*/) =>  {
    auth.signOut().then(() => {
      console.log("Signed out");
    });
  }
}

function loadAndInitAuth() {
  return new Promise((resolve, reject) => {
    api.load('client:auth2', () => {
      api.client.init({ clientId, scope}).then(resolve, reject);
    });
  });
}

function onStatusChange (dispatch, isSigned, userId) {
  let action = null;
  if (isSigned) {
    action =  { type: GOOGLE_SIGN_IN, payload: userId};
  } else {
    action =  { type: GOOGLE_SIGN_OUT};
  }

  dispatch(action);
}
