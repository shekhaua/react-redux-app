import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';

import './CreateStream.css';

import Card from "../../card/Card";
import StreamForm from '../stream-form/StreamForm';

import {createStream} from "../../../actions/streamy";

class CreateStream extends Component {

  render() {
    return (
      <Fragment>
        <Card title="Create a stream">
          <StreamForm formId="createFrom" doSubmit={this.doSubmit.bind(this)} />
        </Card>
      </Fragment>
    );
  }

  doSubmit(formValues) {
    this.props.createStream(formValues);
  }
}

export default connect(null, { createStream })(CreateStream);
