import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './BaseInput.css';

class BaseInput extends React.Component {

  static defaultProps = {
    onChange: (e) => {}
  };

  static propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.string,
    cssClass: PropTypes.string,
    placeholder: PropTypes.string
  };

  onInputChange(event) {
    this.props.onChange(event.target.value);
  };

  render() {
    const cssClass = classNames({'form-control': true, [`${this.props.cssClass}`]: this.props.cssClass});

    return (
      <input type="text" className={cssClass} placeholder={this.props.placeholder}
             value={this.props.value}
             onChange={this.onInputChange.bind(this)} />
    );
  }
}

export default BaseInput;
