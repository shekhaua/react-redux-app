import React, {Component} from 'react';
import {connect} from "react-redux";
import BaseWidget from "../base-widget/BaseWidget";

import "./Posts.css";
import {getPostsAndUsers} from "../../actions";
import UserHeader from "../user-header/UserHeader";

class Posts extends Component {

  componentDidMount() {
    this.props.getPostsAndUsers();
  }

  render () {
    return (
      <BaseWidget heading="Posts">
        {this.renderWidgetContent()}
      </BaseWidget>
    );
  }

  renderWidgetContent() {
    return this.props.posts.map((post, i) => {
      return (
        <div key={post.id} className="comment-widgets scrollable ps-container ps-theme-default ps-active-y">
          <div className="d-flex flex-row comment-row mt-0 mb-0">
            <div className="p-2">
              <img src="/assets/images/users/genu.jpg" alt="user" width="40" className="rounded-circle"/>
            </div>
            <div className="comment-text w-100">
              <UserHeader userId={post.userId}/>
              <span className="text-muted mr-2 font-12">10:20 AM 20 may 2016</span>
              <span className="badge badge-info badge-rounded text-uppercase font-medium">Pending</span>
              <span className="mb-2 d-block font-14 text-muted font-light mt-3">{post.body}</span>
            </div>
          </div>
        </div>
      );
    });
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps, { getPostsAndUsers })(Posts);