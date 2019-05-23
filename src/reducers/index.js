import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import {songsReducer, selectedSongReducer} from "./songs";
import {toastMessageReducer} from "./toast-message";
import {postsReducer} from "./posts";
import {usersReducer} from "./users";
import {googleAuthReducer} from "./googleAuth";
import {signedUserReducer} from "./signedUser";

export default combineReducers({
  form: formReducer,
  songs: songsReducer,
  selectedSong: selectedSongReducer,
  toastMessage: toastMessageReducer,
  posts: postsReducer,
  users: usersReducer,
  googleAuth: googleAuthReducer,
  signedUser: signedUserReducer
});