import {getUser} from "./users";
import {getPosts} from "./posts";

export const getPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(getPosts());

  const posts = getState().posts;
  const userIds = posts.map((post) => {
    return post.userId;
  });
  const uniqueUserIds = [...new Set(userIds)];

  uniqueUserIds.forEach((id) => {
    dispatch(getUser(id));
  });
};