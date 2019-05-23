import React from 'react';

import classNames from "classnames";
import './BaseWidget.css';

const BaseWidget = (props) => {
  const className = classNames({'base-widget': true, 'white-box': true, [`${props.cssClass}`]: props.cssClass});
  return (
    <div className={className}>
      <h3 className="box-title">{props.heading}</h3>
      {props.children}
    </div>
  );
};

export default BaseWidget;