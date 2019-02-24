import React, {Component} from 'react';

class HeaderUserProfile extends Component {

  render () {
    return (
      <a className="profile-pic" href="/">
        <img src={this.props.avatar} alt={this.props.userName} width="36" className="img-circle"/>
        <b className="hidden-xs">{this.props.userName}</b>
      </a>
    );
  }
}

export default HeaderUserProfile;