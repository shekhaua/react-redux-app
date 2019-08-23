import React, {useState} from 'react';
import classNames from "classnames";
import BaseWidget from "../base-widget/BaseWidget";
import ResourceList from "./ResourceList";

const HooksSimpleExample = () => {
  const [action, setAction] = useState('todos');

  const tabs = [
    {name: 'Todos', path: 'todos'},
    {name: 'Posts', path: 'posts'}
  ];

  function renderTabs(tabs) {
    return tabs.map((tab) => {
      const cssClass = classNames({
        'nav-link': true,
        'show': (tab.path === action),
        'active': (tab.path === action),
      });

      return (
        <li className="nav-item">
          <span className={cssClass} onClick={() => {setAction(tab.path)}}>{tab.name}</span>
        </li>
      );
    });
  }

  return (
    <BaseWidget headings="Hooks simple example">
      <div className="tab-container">
          <ul className="nav nav-tabs nav-tabs-classic">
            {renderTabs(tabs)}
          </ul>
          <ResourceList resourcePath={action}/>
        </div>
    </BaseWidget>
  );
};

export default HooksSimpleExample;