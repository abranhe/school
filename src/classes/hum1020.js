import React, { Component } from 'react';
import Art from '../components/art';
import '../App.css';

import delivery from '../assets/delivery-of-the-keys.jpg';
import agony from '../assets/geths-mantegna.jpg';
import pietro from '../assets/pietro-perugino.jpg';
import madonna from '../assets/madonna-with-child.jpg';

class Humanities extends Component {
  render() {
    return (
      <div className='App'>
        <h4>HUM 1020 | Carlos Abraham Hernandez</h4>
        <Art
          imageUrl={delivery}
          artName='The Delivery of the Keys to Saint Peter'
          author='Pietro Perugino'
          learnMoreUrl='https://en.wikipedia.org/wiki/Delivery_of_the_Keys_(Perugino)'
          year='1481–1482'
          technique='Linear perspective'
          idName='linear'
        />
        <br />
        <Art
          imageUrl={agony}
          artName='The Agony in the Garden'
          author='Andrea Mantegna'
          learnMoreUrl='https://en.wikipedia.org/wiki/Agony_in_the_Garden_(Mantegna,_London)'
          year='1455'
          technique='Aerial prospective'
          idName='aerial'
        />
        <br />
        <Art
          imageUrl={pietro}
          artName='Pietà'
          author='Pietro Perugino'
          learnMoreUrl='https://en.wikipedia.org/wiki/Piet%C3%A0_(Perugino)'
          year='1483–1493'
          technique='Chiaroscuro'
          idName='chiaroscuro'
        />
        <br />
        <Art
          imageUrl={madonna}
          artName='Madonna and Child with Saints'
          author='Luca Signorelli'
          learnMoreUrl='https://en.wikipedia.org/wiki/Madonna_and_Child_with_Saints_(Signorelli,_Arezzo)'
          year='1519–1523'
          technique='Sfumato'
          idName='sfumato'
        />
        <br />
      </div>
    );
  }
}

export default Humanities;
