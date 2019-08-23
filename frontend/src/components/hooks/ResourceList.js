import React from 'react';
import TodoList from "./TodoList";
import PostsList from "./PostsList";
import useResource from "./useResource";

const ResourceList = ({resourcePath}) => {

  const [resources] = useResource(resourcePath);

  return (
    <div className="tab-content tabcontent-border mb-4 p-4">
      <div className="tab-pane show active">
        {(resourcePath === 'todos')? <TodoList todos={resources}/> : <PostsList posts={resources}/>}
      </div>
    </div>
  );
};

export default ResourceList;