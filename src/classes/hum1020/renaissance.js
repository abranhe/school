import React, { Component } from 'react';
import Art from '../../components/hum1020/art';
import Footer from '../../components/footer';
import data from '../../data/hum1020/renaissance';
import '../../styles/hum1020/renaissance.css';

class Renaissance extends Component {
  render() {
    const Arts = data.map((art) => (
      <div>
        <Art
          imageUrl={art.image}
          imageEffectUrl={art.imageEffect}
          artName={art.name}
          author={art.author}
          learnMoreUrl={art.wikipedia}
          year={art.year}
          technique={art.technique}
          idName={art.id}
        />
        <br />
      </div>
    ));

    return (
      <div className="App">
        <h4>HUM 1020 | Carlos Abraham Hernandez</h4>
        {Arts}
        <br />
        <Footer />
        <br />
      </div>
    );
  }
}

export default Renaissance;
