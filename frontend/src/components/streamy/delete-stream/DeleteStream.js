import React, {Component, Fragment} from 'react';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import history from '../../../history'

import Modal from "../../modal/Modal";

import {deleteStream, getStream} from "../../../actions/streamy";
import {STREAMS} from "../routes";

class DeleteStream extends Component {

  componentDidMount() {
    this.props.getStream(this.props.match.params.id);
  }

  render() {
    return (
      <Modal headingText="Delete stream" content={this.renderContent()} actions={this.renderActions()} onClose={this.onClose} />
    );
  }

  renderContent() {
    //TODO: SHOW LOADING INDICATOR
    if(!this.props.stream) {
      return null;
    }
    return (
      <Fragment>
        <h4>You are about to delete the following stream:</h4>
        <p>{this.props.stream.title}</p>
        <p>{this.props.stream.description}</p>
      </Fragment>
    );
  }

  renderActions() {
    return (
      <Fragment>
        <button type="button" onClick={this.onDelete.bind(this)} className="btn btn-danger waves-effect">Delete</button>
        <Link to={STREAMS} className="btn btn-default waves-effect">Close </Link>
      </Fragment>
    );
  }

  onDelete() {
    this.props.deleteStream(this.props.match.params.id);
  }

  onClose() {
    history.push(STREAMS);
  }
}

function mapStateToProps(state, ownProps) {
  return {
    stream: state.streams[ownProps.match.params.id]
  };
}

export default connect(mapStateToProps, {deleteStream, getStream})(DeleteStream);