import React, { Component } from 'react';

import BaseWidget from "../../base-widget/BaseWidget";
import WidgetsService from "../../../api/Widgets";
import Spinner from "../../spinner/Spinner";

class TotalViewsWidget extends Component {
  state = { viewsNumber: 0, isLoading: true };

  componentDidMount() {
    WidgetsService.getTotalViews().then((resp) => {
      this.setState({viewsNumber: resp.totalViews, isLoading: false})
    }, (err) => {
      console.log('ERROR: ', err);
      this.setState({isLoading: false})
    });
  }

  renderContent() {
    if(this.state.isLoading) {
      return (
        <Spinner/>
      );
    }

    return (
      <ul className="list-inline two-part">
        <li>
          <div id="sparklinedash2"></div>
        </li>
        <li className="text-right">
          <i className="ti-arrow-up text-purple"></i>
          <span className="counter text-purple">{this.state.viewsNumber}</span>
        </li>
      </ul>
    );
  }

  render () {
    return (
      <BaseWidget heading="Total views" cssClass="analytics-info">
        {this.renderContent()}
      </BaseWidget>
    );
  }
}

export default TotalViewsWidget;