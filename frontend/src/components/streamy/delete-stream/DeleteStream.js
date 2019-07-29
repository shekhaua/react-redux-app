import React, {Component, Fragment} from 'react';
import {Redirect} from "react-router-dom";

import {STREAMS} from '../../../components/streamy/routes';

class DeleteStream extends Component {
  render() {
    return (
      <Fragment>
        <Redirect to={STREAMS} />
      </Fragment>
    );
  }
}

export default DeleteStream;