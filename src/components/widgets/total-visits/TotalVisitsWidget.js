import React, { Component } from 'react';

import BaseWidget from "../../base-widget/BaseWidget";
import WidgetsService from "../../../api/Widgets";

class TotalVisitsWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visitsNumber: 0
    };
  }

  componentDidMount() {
    WidgetsService.getTotalVisits().then((resp) => {
      this.setState({visitsNumber: resp.totalVisits})
    }, (err) => {
      console.log('ERROR: ', err)
    });
  }

  render () {
    return (
      <BaseWidget heading="Total visits" cssClass="analytics-info">
        <ul className="list-inline two-part">
          <li>
            <div id="sparklinedash"></div>
          </li>
          <li className="text-right">
            <i className="ti-arrow-up text-success"></i>
            <span className="counter text-success">{this.state.visitsNumber}</span>
          </li>
        </ul>
      </BaseWidget>
    );
  }
}

export default TotalVisitsWidget;