import React, {Component} from 'react';
import {connect} from 'react-redux';
import BaseWidget from "../base-widget/BaseWidget";
import {selectSong, showToastMessage, setToastMessageHeader, setToastMessageHeaderInfo, setToastMessage} from '../../actions'

import './Spotify.css';

class Spotify extends Component {

  onSongSelect(song) {
    this.props.selectSong(song);
    this.props.setToastMessageHeader(song.title);
    this.props.setToastMessageHeaderInfo(song.duration);
    this.props.setToastMessage(`${song.title} (${song.duration})`);
    this.props.showToastMessage(true);
  }

  renderSongsRows(songs) {
    return songs.map((song, i) => {
      const {title, duration} = song;
      return (
        <tr key={i}>
          <td className="pl-4">{i + 1}</td>
          <td>
            <h5 className="font-medium mb-0">{title}</h5>
            <span className="text-muted">Texas, United states</span>
          </td>
          <td>
            <span className="text-muted">{duration}</span><br/>
            <span className="text-muted">Past : teacher</span>
          </td>
          <td>
            <button type="button" className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2">
              <i className="icon-trash"></i>
            </button>
            <button type="button" onClick={this.onSongSelect.bind(this, song)}
            className="btn btn-outline-info btn-circle btn-lg btn-circle ml-2">
              <i className="ti-pencil-alt"></i>
            </button>
          </td>
        </tr>
      );
    });
  }

  renderSongsList(songs) {
    return (
      <div className="table-responsive">
        <table className="table no-wrap user-table mb-0">
          <thead>
          <tr>
            <th scope="col" className="border-0 text-uppercase font-medium pl-4">#</th>
            <th scope="col" className="border-0 text-uppercase font-medium">Title</th>
            <th scope="col" className="border-0 text-uppercase font-medium">Duration</th>
            <th scope="col" className="border-0 text-uppercase font-medium">Manage</th>
          </tr>
          </thead>
          <tbody>
            {this.renderSongsRows(songs)}
          </tbody>
        </table>
      </div>
    );
  }

  render () {
    return (
      <BaseWidget heading="Spotify songs">
        {this.renderSongsList(this.props.songsList)}
      </BaseWidget>
    );
  }

  componentDidMount() {
  }
}

/*
* Maps global state to component props
* */
function mapStateToProps (state) {
  return {
    songsList: state.songs
  }
}
export default connect(mapStateToProps, {
  selectSong, showToastMessage, setToastMessageHeader, setToastMessageHeaderInfo, setToastMessage
})(Spotify);