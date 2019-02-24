import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import BaseInput from "../base-input/BaseInput";

class InputGroup extends Component {

  static defaultProps = {
    placeholder: 'Search for...',
    buttonText: 'Go!',
    onSubmit: (e) => {}
  };

  static propTypes = {
    placeholder: PropTypes.string,
    buttonText: PropTypes.string,
    cssClass: PropTypes.string,
    onSubmit: PropTypes.func
  };

  constructor(props) {
    super(props);
    this.onBaseInputChange = this.onBaseInputChange.bind(this);
    this.onButtonClick = this.onButtonClick.bind(this);
    this.state = { term: '' };
  }

  onBaseInputChange(e) {
    this.setState({ term: e });
  }

  onButtonClick() {
    this.props.onSubmit(this.state.term);
    this.setState({term: ''})
  }

  render() {
    const cssClass = classNames({'input-group': true, [`${this.props.cssClass}`]: this.props.cssClass});
    return (
      <div className={cssClass}>
        <BaseInput onChange={this.onBaseInputChange} value={this.state.term} placeholder={this.props.placeholder}/>
        <span className="input-group-btn">
          <button className="btn btn-default" type="button" onClick={this.onButtonClick}>{this.props.buttonText}</button>
        </span>
      </div>
    );
  }
}

export default InputGroup;