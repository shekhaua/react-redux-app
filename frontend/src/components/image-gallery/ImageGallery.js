import React, {Component} from 'react';

import BaseWidget from "../base-widget/BaseWidget";
import InputGroup from "../input-group/InputGroup";
import ImageGalleryItem from "./item/ImageGalleryItem";
import {getUnsplashImages} from "../../api/Unsplash";
import './ImageGallery.css';

class ImageGallery extends Component {

  state = { items: [] };

  onInputSubmit = async (e) => {
    const resp = await getUnsplashImages(e);
    this.setState({ items: resp.results })
  };

  getGalleryItems(items) {
    if( items.length) {
      return items.map(({ id, urls, user, description }) => {
        return (
          <div className="col-lg-3 col-md-6">
            <ImageGalleryItem key={id} imgUrl={urls.thumb} userName={user.name} description={description}/>
          </div>
        );
      });
    }

    return (
      <div className="no-content">Start searching images by typing a search term in the input box.</div>
    );
  }

  render() {
    return (
      <div className="image-gallery form-widget">
        <BaseWidget heading="Unsplash gallery">
          <InputGroup cssClass="pull-right search" onSubmit={this.onInputSubmit} placeholder="Search for images..."/>
          <div className="row el-element-overlay">
            {this.getGalleryItems(this.state.items)}
          </div>
        </BaseWidget>
      </div>
    );
  }
}

export default ImageGallery;
