import React, {Component} from 'react';
import {connect} from 'react-redux';

import {showToastMessage} from "../../actions";

import BaseToastMessage from "../base-toast-message/BaseToastMessage";

class ToastMessage extends Component {

  state = {timeToClose: 0};
  idx = 0;

  componentDidMount() {
    //console.log("COMPONEND DID MOUNT")
  }

  componentWillUnmount() {
    //console.log("COMPONEND Will UNMOUNT")
  }

  // TODO: think how to implement it
  setTimeCounter() {
    this.idx = 0;
    //this.setState({timeToClose: this.idx});

    if (this.props.show && this.props.autoCloseTimeMs) {
      clearInterval(this.id);

      this.id = setInterval(() => {
        //console.log("SET INTERVAL", this.idx);
        //this.setState({timeToClose: this.idx});
        if(this.props.autoCloseTimeMs - (++this.idx * 1000) <= 0) {
          clearInterval(this.id);
          this.props.showToastMessage(false);
        }
      }, 1000);
    }
  }

  render () {

    this.setTimeCounter();
    return (
      <BaseToastMessage headerText={this.props.headerText} visible={this.props.show}
                        headerInfo={`${this.state.timeToClose}s`}
                        message={this.props.message}/>
    );
  }
}

function mapStateToProps(state) {
  const {show, headerText, headerInfo, message, autoCloseTimeMs} = state.toastMessage;
  return {
    show,
    headerText,
    headerInfo,
    autoCloseTimeMs,
    message
  };
}

export default connect(mapStateToProps, {showToastMessage})(ToastMessage);