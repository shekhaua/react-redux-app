import {combineReducers} from 'redux';
import {songsReducer, selectedSongReducer} from "./songs";
import {toastMessageReducer} from "./toast-message";
import {postsReducer} from "./posts";
import {usersReducer} from "./users";

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
  toastMessage: toastMessageReducer,
  posts: postsReducer,
  users: usersReducer
});