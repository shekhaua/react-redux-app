import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';

import './ShowStream.css'

import FlvJs from 'flv.js';
import LoadingIndicator from '../../spinner/LoadingIndicator'

import {getStream} from "../../../actions/streamy";

class ShowStream extends Component {

  videoElement = React.createRef();
  flvPlayer = null;

  componentDidMount() {
    this.props.getStream(this.props.match.params.id);
  }

  componentDidUpdate() {
    this.initPlayer();
  }

  componentWillUnmount() {
    this.flvPlayer.destroy();
  }

  render() {
    console.log('STREAM', this.props.stream);

    if(!this.props.stream) {
      return (
        <LoadingIndicator/>
      );
    }

    return (
      <Fragment>
        <video ref={this.videoElement} width="100%" controls></video>
        <div>Show Stream {this.props.match.params.id}</div>
      </Fragment>
    );
  }

  initPlayer() {

    if(this.flvPlayer || !this.props.stream) { return; }

    if (FlvJs.isSupported()) {
      this.flvPlayer = FlvJs.createPlayer({
        type: 'flv',
        url: 'http://localhost:8000/live/STREAM_NAME.flv'
      });
      this.flvPlayer.attachMediaElement(this.videoElement.current);
      this.flvPlayer.load();
    }
  }
}

function mapStateToProps(state, ownProps) {
  return {
    stream: state.streams[ownProps.match.params.id]
  };
}

export default connect(mapStateToProps, {getStream})(ShowStream);