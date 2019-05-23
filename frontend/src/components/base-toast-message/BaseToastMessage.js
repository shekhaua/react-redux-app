import React, {Component} from 'react';
import classNames from "classnames";

import './BaseToastMessage.css';

class BaseToastMessage extends Component {

  static defaultProps = {
    visible: false,
    onHide: null,
    onShow: null,
    closable: true,
    style: null,
    className: null,
    baseZIndex: 0,
    minX: 0,
    minY: 0
  };

  state = {
    visible: false
  };

  renderCloseButton() {
    return (
      <button type="button" className="ml-2 mb-1 close" aria-label="Close">
        <span aria-hidden="true">×</span>
      </button>
    );
  }

  render() {
    const {headerText, headerInfo, message} = this.props;
    const cssClass = classNames({
      'toast': true,
      'fade': true,
      [`${this.props.cssClass}`]: this.props.cssClass,
      'show': this.props.visible
    });
    const closeBtn = this.renderCloseButton();

    return (
      <div className={cssClass} role="alert">
        <div className="toast-header">
          <strong className="mr-auto">{headerText}</strong>
          <small className="text-muted">{headerInfo}</small>
          {closeBtn}
        </div>
        <div className="toast-body">
          {message}
        </div>
      </div>
    );
  }
}


export default BaseToastMessage;