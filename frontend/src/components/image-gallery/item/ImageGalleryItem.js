import React, {Component, createRef} from "react";

class ImageGalleryItem extends Component {

  state = {
    imageWidth: 0,
    imageHeight: 0
  };

  itemRef = createRef();

  componentDidMount() {
    this.itemRef.current.addEventListener('load', (/*e*/) => {
      const { width, height } = this.itemRef.current.getBoundingClientRect();
      this.setState({ imageWidth: Math.ceil(width), imageHeight: Math.ceil(height)});
    });
  }

  render() {
    return (
        <div className="card el-card-item">
            <div className="el-card-avatar el-overlay-1">
              <img ref={this.itemRef} src={this.props.imgUrl} alt={this.props.description}/>
              <div className="el-overlay">
                <ul className="list-style-none el-info">
                  <li className="el-item">
                    <a className="btn default btn-outline image-popup-vertical-fit el-link" href={this.props.imgUrl}>
                      <i className="icon-magnifier"></i>
                    </a>
                  </li>
                  <li className="el-item">
                    <a className="btn default btn-outline el-link" href={this.props.imgUrl}>
                      <i className="icon-link"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="el-card-content">
              <h4 className="mb-0">{this.props.userName}</h4>
              <span className="text-muted">{this.props.description}</span>
              <p className="text-muted">{this.state.imageWidth} x {this.state.imageHeight} pixels</p>
            </div>
        </div>
    );
  }
}

export default ImageGalleryItem;