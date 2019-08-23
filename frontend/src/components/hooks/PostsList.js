import React from 'react';

const PostsList = ({posts}) => {
  return posts.map((item) => {
    return (
      <div key={item.id} className="comment-widgets scrollable ps-container ps-theme-default ps-active-y">
        <div className="d-flex flex-row comment-row mt-0 mb-0">
          <div className="comment-text w-100">
            <span className="mb-2 d-block font-14 font-light mt-3">{item.title}</span>
            <span className="mb-2 d-block font-14 text-muted font-light mt-3">{item.body}</span>
          </div>
        </div>
      </div>
    );
  });
};

export default PostsList;