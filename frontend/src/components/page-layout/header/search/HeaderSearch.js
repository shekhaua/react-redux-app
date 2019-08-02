import React, {Component} from 'react';
import BaseInput from "../../../base-input/BaseInput";

class HeaderSearch extends Component {

  onInputSearch(e) {
    //console.log(e);
  }

  render () {
    return (
      <form role="search" className="app-search hidden-sm hidden-xs m-r-10">
        <BaseInput onChange={this.onInputSearch.bind(this)} cssClass="form-control" placeholder="Search..."/>
        <span><i className="fa fa-search"></i></span>
      </form>
    );
  }
}

export default HeaderSearch;