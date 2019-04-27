import React, { Component } from 'react';

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

class App extends Component {
  render(/*props*/) {
    return (
      <PageLayout>
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

        <div className="row">
          <div className="col-md-12 col-lg-12 col-sm-12">
            <ImageGallery/>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 col-lg-12 col-sm-12">
            <Youtube/>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 col-lg-12 col-sm-12">
            <Spotify/>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 col-lg-12 col-sm-12">
            <Posts/>
          </div>
        </div>

        <ToastMessage/>
      </PageLayout>
    );
  }
}

export default App;
