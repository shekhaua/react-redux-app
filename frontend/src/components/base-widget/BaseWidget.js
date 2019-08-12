import React, {Component} from 'react';

import classNames from "classnames";
import './BaseWidget.css';

class BaseWidget extends Component {
  render () {
    const className = classNames({'base-widget': true, 'white-box': true, [`${this.props.cssClass}`]: this.props.cssClass});
    return (
      <div className={className}>
        <h3 className="box-title">{this.props.heading}</h3>
        {this.renderSubHeading(this.props.subHeading)}
        {this.props.children}
      </div>
    );
  }

  renderSubHeading(text) {
    if(!text) { return null; }
    return (
      <h6 className="card-subtitle">{text}</h6>
    );
  }
}

export default BaseWidget;