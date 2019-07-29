import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import classNames from 'classnames';

import './SideNavigation.css';

class SideNavigation extends Component {

  static defaultProps = {
    menuItems: []
  };

  renderMenuItems(items) {
    return items.map((i, index) => {
      const cssClass = classNames({'fa': true, 'fa-fw': true, [`fa-${i.icon}`]: i.icon});
      return (
        <li key={index} className="sidebar-item">
          <Link to={i.route}><i className={cssClass}></i>{i.label}</Link>
          <ul className="collapse first-level in">
            {this.renderSubMenu(i.items)}
          </ul>
        </li>
      );
    });
  }

  renderSubMenu(items = []  ) {
    return items.map((i, index) => {
      return (
        <li key={index} className="sidebar-item">
          <Link to={i.route} className="sidebar-link">
            <i></i>
            <span className="hide-menu">{i.label}</span>
          </Link>
        </li>
      );
    });

  }

  render() {
    return (
      <div className="navbar-default sidebar" role="navigation">
        <div className="sidebar-nav slimscrollsidebar">
          <div className="sidebar-head">
            <h3>
              <span className="fa-fw open-close"><i className="ti-close ti-menu"></i></span>
              <span className="hide-menu">Navigation</span>
            </h3>
          </div>
          <ul className="nav" id="side-menu">
            {this.renderMenuItems(this.props.menuItems)}
          </ul>
          <div className="center p-20">
            <button className="btn btn-danger btn-block">Perform Action</button>
          </div>
        </div>
      </div>
    );
  }
}

export default SideNavigation;
