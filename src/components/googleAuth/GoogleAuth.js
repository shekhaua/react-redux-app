import React, {Component} from 'react';
import {connect} from "react-redux";
import {initGoogleAuth, tryToSignIn, tryToSignOut} from "../../actions/googleAuth";

class GoogleAuth extends Component {

  doSignIn = (event) => {
    this.props.tryToSignIn();
    event.preventDefault();
  };

  doSignOut = (event) => {
    this.props.tryToSignOut();
    event.preventDefault();
  };

  componentDidMount() {
    this.props.initGoogleAuth();
  }

  render() {
    console.log('props', this.props.googleAuth);
    const status = this.props.googleAuth.userSignedIn;

    if (status === null) {
      return null;
    } else if (status) {
      return (
        <a href="/" onClick={this.doSignOut}><b>Sign out</b></a>
      );
    } else {
      return (
        <a href="/" onClick={this.doSignIn}><b>Sign in</b></a>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    googleAuth: state.googleAuth
  }
}

export default connect(mapStateToProps, {initGoogleAuth, tryToSignIn, tryToSignOut})(GoogleAuth);