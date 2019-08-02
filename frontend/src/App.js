import React, { Component } from 'react';
import { Route, Router } from 'react-router-dom'

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
import CreateStream from "./components/streamy/create-stream/CreateStream";
import history from './history';
import ShowStream from "./components/streamy/show-stream/ShowStream";
import EditStream from "./components/streamy/edit-stream/EditStream";
import DeleteStream from "./components/streamy/delete-stream/DeleteStream";

import { STREAMS, CREATE_STREAM, EDIT_STREAM, deleteStreamPath, SHOW_STREAM } from './components/streamy/routes';

class App extends Component {
  render(/*props*/) {
    return (
      <Router history={history}>
        <PageLayout>
          <Route path="/" exact component={Widgets}/>
          <Route path="/unsplash" component={UnsplashSearch}/>
          <Route path="/youtube" component={YouTubeSearch}/>
          <Route path="/spotify" component={SpotifySongs}/>
          <Route path="/posts" component={PostsList}/>
          <Route path={STREAMS} exact component={Streamy}/>
          <Route path={CREATE_STREAM} exact component={CreateStream}/>
          <Route path={SHOW_STREAM} exact component={ShowStream}/>
          <Route path={EDIT_STREAM} exact component={EditStream}/>
          <Route path={deleteStreamPath()} component={DeleteStream}/>
          <ToastMessage/>
        </PageLayout>
      </Router>
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