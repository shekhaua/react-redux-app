import React, {Component} from 'react';
import BaseWidget from "../base-widget/BaseWidget";

import './Youtube.css';
import InputGroup from "../input-group/InputGroup";
import {getVideosList} from "../../api/Youtube";

class Youtube extends Component {

  constructor() {
    super();
    this.onInputSubmit = this.onInputSubmit.bind(this);
    this.onItemClick = this.onItemClick.bind(this);
    this.state = { videos: [], selectedVideo: null }
  }

  async onInputSubmit(e) {
    const resp = await getVideosList(e);
    console.log(resp);
    this.setState({ videos: resp, selectedVideo: resp.length && resp[0]});
  }

  onItemClick(event, video) {
    event.preventDefault();
    console.log(video);
    this.setState({ selectedVideo: video });
  }


  getVideoItems(items) {
    if( items.length) {
      const videos = items.map((i, index) => {
        return (
          <li key={index}>
            <div className="message-center chat-scroll">
              <a href="/" onClick={(e) => {this.onItemClick(e,i)}} className="message-item">

                  <img src={i.snippet.thumbnails.default.url} alt="video" />

                <div className="mail-contnet">
                  <h5 className="message-title">{i.snippet.title}</h5>
                  <span className="mail-desc">{i.snippet.description}</span>
                  <span className="time">{i.snippet.publishedAt}</span></div>
              </a>
            </div>
          </li>
        );
      });
      return (
        <div className="col-lg-4 col-sm-4 col-xs-12">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Videos</h4>
              <ul className="mailbox list-style-none">
                  {videos}
              </ul>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="no-content">Start searching videos by typing a search term in the input box.</div>
    );
  }

  getVideoPlayer(item) {
    if(!item) { return; }
    return (
      <div className="col-lg-8 col-sm-8 col-xs-12">
        <div>
          <iframe width="560" height="315" src={`https://www.youtube.com/embed/${item.id.videoId}`}
                  frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen title={item.snippet.title}></iframe>
        </div>
        <div>{item.snippet.title}</div>
        <div>{item.snippet.description}</div>
      </div>
    );
  }

  render() {
    return (
      <div className="youtube-component form-widget">
        <BaseWidget heading="Youtube search">
          <InputGroup cssClass="pull-right search" onSubmit={this.onInputSubmit} placeholder="Search for videos..."/>
          <div className="row el-element-overlay">
            {this.getVideoPlayer(this.state.selectedVideo)}
            {this.getVideoItems(this.state.videos)}
          </div>
        </BaseWidget>
      </div>
    );
  }
}

export default Youtube;
