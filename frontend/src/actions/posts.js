import {fetchPosts} from "../api/JsonPlaceholder";

export const PostsActions = {
  fetchPosts: "FETCH_POSTS"
};

export const getPosts = () => {
  return async (dispatch /*getState*/) => {
    const posts = await fetchPosts();
    dispatch({
      type: PostsActions.fetchPosts,
      payload: posts
    });
  };
};