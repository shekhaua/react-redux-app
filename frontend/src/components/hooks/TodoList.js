import React from 'react';
import classNames from "classnames";

const TodoList = ({todos}) => {
  return todos.map((item) => {
    const cssClass = classNames(
      {'badge': true},
      {'badge-rounded': true},
      {'text-uppercase': true},
      {'font-medium': true},
      {'badge-info': !item.completed},
      {'badge-success': item.completed});
    return (
      <div key={item.id} className="comment-widgets scrollable ps-container ps-theme-default ps-active-y">
        <div className="d-flex flex-row comment-row mt-0 mb-0">
          <div className="comment-text w-100">
            <span className="text-muted mr-2 font-12">{item.title}</span>
            <span className={cssClass}>{(item.completed)? 'Done' : 'Pending'}</span>
          </div>
        </div>
      </div>
    );
  });
};

export default TodoList;