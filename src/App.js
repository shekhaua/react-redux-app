import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import './App.css';

import PageLayout from "./components/page-layout/PageLayout";
import TotalVisitsWidget from "./components/widgets/total-visits/TotalVisitsWidget";
import TotalViewsWidget from "./components/widgets/total-views/TotalViewsWidget";
import UniqueVisitorsWidget from "./components/widgets/unique-visitors/UniqueVisitorsWidget";
import ImageGallery from "./components/image-gallery/ImageGallery";
import Youtube from "./components/youtube/Youtube";
import Spotify from "./components/spotify/Spotify";
import ToastMessage from "./components/toast-message/ToastMessage";
import Posts from "./components/posts/Posts";
import Streamy from "./components/streamy/Streamy";

class App extends Component {
  render(/*props*/) {
    return (
      <BrowserRouter>
        <PageLayout>
          <Route path="/" exact component={Widgets}/>
          <Route path="/unsplash" component={UnsplashSearch}/>
          <Route path="/youtube" component={YouTubeSearch}/>
          <Route path="/spotify" component={SpotifySongs}/>
          <Route path="/posts" component={PostsList}/>
          <Route path="/streamy" component={Streamy}/>
          <ToastMessage/>
        </PageLayout>
      </BrowserRouter>
    );
  }
}

export default App;


function Widgets() {
  return (
    <div className="row">
      <div className="col-lg-4 col-sm-6 col-xs-12">
        <TotalVisitsWidget/>
      </div>
      <div className="col-lg-4 col-sm-6 col-xs-12">
        <TotalViewsWidget/>
      </div>
      <div className="col-lg-4 col-sm-6 col-xs-12">
        <UniqueVisitorsWidget/>
      </div>
    </div>
  );
}

function UnsplashSearch() {
  return (
    <div className="row">
      <div className="col-md-12 col-lg-12 col-sm-12">
        <ImageGallery/>
      </div>
    </div>
  );
}

function YouTubeSearch() {
  return (
    <div className="row">
      <div className="col-md-12 col-lg-12 col-sm-12">
        <Youtube/>
      </div>
    </div>
  );
}

function SpotifySongs() {
  return (
    <div className="row">
      <div className="col-md-12 col-lg-12 col-sm-12">
        <Spotify/>
      </div>
    </div>
  );
}

function PostsList() {
  return (
    <div className="row">
      <div className="col-md-12 col-lg-12 col-sm-12">
        <Posts/>
      </div>
    </div>
  );
}