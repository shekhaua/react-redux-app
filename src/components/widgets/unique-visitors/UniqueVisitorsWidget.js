import React, { Component } from 'react';

import BaseWidget from "../../base-widget/BaseWidget";
import WidgetsService from "../../../api/Widgets";

class UniqueVisitorsWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uniqueVisitorsNumber: 0
    };
  }
  componentDidMount() {
    WidgetsService.getUniqueVisits().then((resp) => {
      this.setState({uniqueVisitorsNumber: resp.uniqueVisits})
    }, (err) => {
      console.log('ERROR: ', err)
    });
  }

  render () {
    return (
      <BaseWidget heading="Unique visitors" cssClass="analytics-info">
        <ul className="list-inline two-part">
          <li>
            <div id="sparklinedash3"></div>
          </li>
          <li className="text-right">
            <i className="ti-arrow-up text-info"></i>
            <span className="counter text-info">{this.state.uniqueVisitorsNumber}</span>
          </li>
        </ul>
      </BaseWidget>
    );
  }
}

export default UniqueVisitorsWidget;