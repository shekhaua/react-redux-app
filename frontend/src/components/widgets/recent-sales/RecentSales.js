import React from 'react';
import BaseWidget from "../../base-widget/BaseWidget";
import BaseInput from "../../base-input/BaseInput";

class RecentSales extends React.Component {
  render() {
    return (
      <div>

        <div className="col-md-3 col-sm-4 col-xs-6 pull-right">
          <select className="form-control pull-right row">
            <option>March 2017</option>
            <option>April 2017</option>
            <option>May 2017</option>
            <option>June 2017</option>
            <option>July 2017</option>
          </select>
        </div>
        <div className="col-md-3 col-sm-4 col-xs-6 pull-right">
          <BaseInput/>
        </div>
        <BaseWidget heading="Recent sales">

          <div className="table-responsive">
            <table className="table">
              <thead>
              <tr>
                <th>#</th>
                <th>NAME</th>
                <th>STATUS</th>
                <th>DATE</th>
                <th>PRICE</th>
              </tr>
              </thead>
              <tbody>
              {/*<tr *ngFor="let s of sales | async; let i = index">
                    <td>{{i}}</td>
                    <td className="txt-oflo">{{s.name}}</td>
                    <td>{{s.status}}</td>
                    <td className="txt-oflo">{{s.date}}</td>
                    <td><span className="text-success">${{s.price}}</span></td>
                    </tr>*/}
              </tbody>
            </table>
          </div>
        </BaseWidget>
      </div>
    );
  }
}

export default RecentSales;
