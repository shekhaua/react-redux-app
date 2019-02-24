import React from 'react';
import BaseButton from "../../base-button/BaseButton";
import Breadcrumbs from "../../breadcrumbs/Breadcrumbs";

const ContentHeader = (props) => {
  return (
    <div className="row bg-title">
      <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
        <h4 className="page-title">{props.title}</h4>
      </div>
      <div className="col-lg-9 col-sm-8 col-md-8 col-xs-12">
        <BaseButton label="Perform action" type="danger" cssClass="pull-right m-l-20 hidden-xs hidden-sm"/>
        <Breadcrumbs items={[{route: '/', label: 'Dashboard'}]}/>
      </div>
    </div>
  );
};

export default ContentHeader
