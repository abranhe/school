import React, { Component } from 'react';
import Slider from 'react-awesome-slider';
import data from '../../data/hum1020/baroque';
import Footer from '../../components/footer';

import 'react-awesome-slider/dist/styles.css';
import '../../styles/hum1020/baroque.css';

class Baroque extends Component {
  render() {
    const slider = data.filter((art) => art.slider).map((art, key) => {
      return (
        <div key={key} style={{ margin: '10%' }}>
          <h1 style={{ paddingBottom: 20 }}>{art.name}</h1>
          <Slider className="amazing">
            {art.images.map((image, key) => {
              return <div key={key} data-src={image} />;
            })}
          </Slider>
        </div>
      );
    });

    const paitings = data.filter((art) => !art.slider).map((art, key) => {
      return (
        <div key={key}>
          <h1 style={{ paddingBottom: 20 }}>{art.name}</h1>
          <img src={art.image} alt={art.name} />
        </div>
      );
    });

    return (
      <div className="default">
        {slider}
        {paitings}
        <br />
        <Footer />
        <br />
      </div>
    );
  }
}

export default Baroque;
