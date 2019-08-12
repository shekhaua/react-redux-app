import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import LanguageContext from '../../contexts/LanguageContext';

class BaseButton extends Component {
  static contextType = LanguageContext;

  static defaultProps = {
    label: null,
    type: 'default',
    cssClass: null
  };

  static propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    cssClass: PropTypes.string
  };

  render() {

    console.log('CONTEXT', this.context);
    const cssClass = classNames(
      {'btn': true},
      {[`btn-${this.props.type}`]: this.props.type},
      {[`${this.props.cssClass}`]: this.props.cssClass});

    return (
      <button className={cssClass}>
        {this.props.label}
      </button>
    );
  }
}

export default BaseButton;