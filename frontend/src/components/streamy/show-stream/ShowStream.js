import React, {Component} from 'react';

class ShowStream extends Component {
  render() {
    return (
      <div>Show Stream {this.props.match.params.id}</div>
    );
  }
}

export default ShowStream;