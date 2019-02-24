import React from 'react';

import PageHeader from "./header/PageHeader";
import SideNavigation from "./side-navigation/SideNavigation";
import PageFooter from "./footer/PageFooter";
import ContentHeader from "./content-header/ContentHeader";

const PageLayout = (props) => {
  return (
    <div id="wrapper">
      <PageHeader/>
      <SideNavigation menuItems={[{icon: 'clock-o', route: '/', label: 'Dashboard'}]}/>
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