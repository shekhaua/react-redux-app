import {PostsActions} from '../actions';

export const postsReducer = (currentPosts = [], action) => {
  if(action.type === PostsActions.fetchPosts) {
    return action.payload;
  }
  return currentPosts;
};