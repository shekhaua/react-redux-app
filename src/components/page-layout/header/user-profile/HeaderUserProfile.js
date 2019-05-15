import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";

import './HeaderUserProfile.css';
import classNames from "classnames";
import {initGoogleAuth, tryToSignIn, tryToSignOut} from "../../../../actions";

class HeaderUserProfile extends Component {

  state = {
    showDropDown: false
  };

  componentDidMount() {
    this.props.initGoogleAuth();
  }

  render () {
    const status = this.props.googleAuth.userSignedIn;

    if (status === null) {
      return null;
    } else if (status) {
      return (
        this.renderWrapper(this.renderUserProfile())
      );
    } else {
      return (
        this.renderWrapper(this.renderSignIn())
      );
    }
  }

  renderWrapper(content) {
    return (
      <div className="header-user-profile">
        {content}
      </div>
    );
  }

  renderUserProfile() {
    const cssClass = classNames({
      'dropdown-menu': true,
      'dropdown-menu-right': true,
      'user-dd': true,
      'show': this.state.showDropDown
    });

    return (
      <Fragment>
        <div className="nav-link _dropdown-toggle" onClick={this.toggleDropDown.bind(this)}>
          <img src={this.props.avatar} alt={this.props.userName} className="rounded-circle" width="31"/>
          <span className="ml-2 _user-text font-medium">{this.props.userName}</span>
          <span className="fa fa-angle-down ml-2 user-text"></span>
        </div>

        <div className={cssClass}>
          <div className="d-flex no-block align-items-center p-3 mb-2 border-bottom">
            <div><img src={this.props.avatar} alt={this.props.userName} className="rounded" width="80"/></div>
            <div className="ml-2">
              <h4 className="mb-0">{this.props.userName}</h4>
              <p className=" mb-0 text-muted">{this.props.email}</p>
              <div className="btn btn-sm btn-danger text-white mt-2 btn-rounded">View Profile</div>
            </div>
          </div>
          <div className="dropdown-item"><i className="ti-user mr-1 ml-1"></i>My Profile</div>
          <div className="dropdown-item"><i className="ti-email mr-1 ml-1"></i>Inbox</div>
          <div className="dropdown-divider"></div>
          <div className="dropdown-item"><i className="ti-settings mr-1 ml-1"></i>Account Setting</div>
          <div className="dropdown-divider"></div>
          <div className="dropdown-item" onClick={this.doSignOut.bind(this)}><i className="fa fa-power-off mr-1 ml-1"></i>Logout</div>
        </div>
      </Fragment>
    );
  }

  renderSignIn() {
    return (
      <div className="nav-link" onClick={this.doSignIn.bind(this)}>
        <span className="ml-2 _user-text font-medium">Sign in</span>
      </div>
    );
  }

  toggleDropDown() {
    this.setState({ showDropDown: !this.state.showDropDown});
  }

  doSignIn(event) {
    this.props.tryToSignIn();
    event.preventDefault();
  }

  doSignOut(event) {
    this.toggleDropDown();
    this.props.tryToSignOut();
    event.preventDefault();
  }

}

function mapStateToProps(state) {
  return {
    googleAuth: state.googleAuth
  }
}

export default connect(mapStateToProps, {initGoogleAuth, tryToSignIn, tryToSignOut})(HeaderUserProfile);