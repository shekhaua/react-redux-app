import React, { Component } from 'react';
import {connect} from 'react-redux';

import logo from './admin-logo.png';
import logoDark from './admin-logo-dark.png';
import logoWithText from './admin-text.png';
import logoDarkWithText from './admin-text-dark.png';
import HeaderSearch from "./search/HeaderSearch";
import HeaderUserProfile from "./user-profile/HeaderUserProfile";

class PageHeader extends Component {
  render () {
    return (
      <nav className="navbar navbar-default navbar-static-top m-b-0">
        <div className="navbar-header">
          <div className="top-left-part">
            <a className="logo" href="index.html">
              <b>
                <img src={logo} alt="home" className="dark-logo" />
                <img src={logoDark} alt="home" className="light-logo" />
              </b>
              <span className="hidden-xs">
                <img src={logoWithText} alt="home" className="dark-logo" />
                <img src={logoDarkWithText} alt="home" className="light-logo" />
              </span>
            </a>
          </div>

          <ul className="nav navbar-top-links navbar-right pull-right">
            <li>
              <HeaderSearch/>
            </li>
            <li>
             <HeaderUserProfile avatar={this.props.user.imageUrl} userName={this.props.user.name} email={this.props.user.email}/>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.googleAuth.user
  };
}

export default connect(mapStateToProps, {})(PageHeader);
