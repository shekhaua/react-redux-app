import React from 'react';

import PageHeader from "./header/PageHeader";
import SideNavigation from "./side-navigation/SideNavigation";
import PageFooter from "./footer/PageFooter";
import ContentHeader from "./content-header/ContentHeader";
import {STREAMS, CREATE_STREAM} from '../../components/streamy/routes';

const navItems = [{
    icon: 'clock-o',
    route: '/',
    label: 'Dashboard'
  }, {
    icon: 'image',
    route: '/unsplash',
    label: 'Unsplash Gallery'

  }, {
    icon: 'youtube-play',
    route: '/youtube',
    label: 'Youtube Search'

  }, {
    icon: 'spotify',
    route: '/spotify',
    label: 'Spotify Songs'

  }, {
    icon: 'wechat',
    route: '/posts',
    label: 'Posts'

  },{
    icon: 'video-camera',
    route: STREAMS,
    label: 'Streamy',
    items: [{
      route: CREATE_STREAM,
      label: 'Create Stream',
    }]
  }, {
  icon: 'connectdevelop',
  route: '/context',
  label: 'Context'

}];

const PageLayout = (props) => {
  return (
    <div id="wrapper">
      <PageHeader/>
      <SideNavigation menuItems={navItems}/>
      <div id="page-wrapper">
        <div className="container-fluid">
          <ContentHeader title="Dashboard"/>
          {props.children}
        </div>
      </div>
      <PageFooter/>
    </div>
  );
};

export default PageLayout;