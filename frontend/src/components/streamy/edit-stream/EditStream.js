import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import pick from 'lodash.pick';

import Card from "../../card/Card";
import LoadingIndicator from '../../spinner/LoadingIndicator';
import StreamForm from "../stream-form/StreamForm";

import {getStream, updateStream} from "../../../actions/streamy";

class EditStream extends Component {

  componentDidMount() {
    if(this.props.stream) { return; }
    this.props.getStream(this.props.match.params.id);
  }

  render() {
    if(!this.props.stream) {
      return (
        <LoadingIndicator/>
      );
    }
    const formValues = pick(this.props.stream, ['title', 'description']);

    return (
      <Fragment>
        <Card title="Edit a stream">
          <StreamForm initialValues={formValues} doSubmit={this.doSubmit.bind(this)} />
        </Card>
      </Fragment>
    );
  }

  doSubmit(formValues) {
    this.props.updateStream(this.props.match.params.id, formValues);
  }
}

function mapStateToProps(state, ownProps) {
  return {stream: state.streams[ownProps.match.params.id]}
}

export default connect(mapStateToProps, {getStream, updateStream})(EditStream);