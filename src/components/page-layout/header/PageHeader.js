import React, { Component } from 'react';
import logo from './admin-logo.png';
import logoDark from './admin-logo-dark.png';
import logoWithText from './admin-text.png';
import logoDarkWithText from './admin-text-dark.png';
import HeaderSearch from "./search/HeaderSearch";
import HeaderUserProfile from "./user-profile/HeaderUserProfile";
import UserService from "../../../api/Users";

class PageHeader extends Component {

  state = {
    userName: '',
    avatar: ''
  };

  componentDidMount() {
    UserService.getCurrentUser().then((resp) => {
      this.setState({userName: resp.username, avatar: resp.avatar})
    })
  }

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
             <HeaderUserProfile avatar={this.state.avatar} userName={this.state.userName}/>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default PageHeader;
