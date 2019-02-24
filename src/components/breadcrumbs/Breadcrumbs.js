import React, {Component} from 'react';

class Breadcrumbs extends Component {

  static defaultProps = {
    items: []
  };

  getItems(itemsData) {
      return itemsData.map((i, index) => {
        return (
          <li key={index}><a href={i.route}>{i.label}</a></li>
        );
      });
  }

  render() {
    return (
      <ol className="breadcrumb">
        {this.getItems(this.props.items)}
      </ol>
    );
  }
}

export default Breadcrumbs;