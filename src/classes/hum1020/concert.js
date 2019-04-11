import React, { Component } from 'react';
import Gallery from 'react-grid-gallery';
import Footer from '../../components/footer';
import { galleryImages } from '../../data/hum1020/concert';
import '../../styles/hum1020/concert.css';

class Concert extends Component {
  renderHeader() {
    return (
      <div className="header">
        <h4>Carlos Abraham Hernandez</h4>
        <h4>Prof. Jose Donis</h4>
      </div>
    );
  }

  renderTitle() {
    return <h2>Concert Extracredit</h2>;
  }

  renderGallery() {
    return (
      <div
        style={{
          display: 'block',
          minHeight: '1px',
          width: '100%',
          overflow: 'auto',
        }}>
        <Gallery
          className="images"
          images={galleryImages}
          enableImageSelection={false}
        />
      </div>
    );
  }

  render() {
    return (
      <div className="app">
        {this.renderHeader()}
        {this.renderTitle()}
        {this.renderGallery()}
        <br />
        sdfsdf
        <Footer />
      </div>
    );
  }
}

export default Concert;
