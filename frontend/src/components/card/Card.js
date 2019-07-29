import React from 'react';
import classNames from "classnames";

const Card = (props) => {
  const cssClass = classNames({'card': true, [`${props.cssClass}`]: props.cssClass});
  return (
    <div className={cssClass}>
      <div className="card-body">
        <h4 className="card-title">{props.title}</h4>
          {props.children}
      </div>
    </div>
  );
};

export default Card;