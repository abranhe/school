import delivery from '../assets/hum1020/delivery-of-the-keys.jpg';
import deliveryFixed from '../assets/hum1020/delivery-of-the-keys-fixed.jpg';
import agony from '../assets/hum1020/geths-mantegna.jpg';
import agonyFixed from '../assets/hum1020/geths-mantegna-fixed.jpg';
import pietro from '../assets/hum1020/pietro-perugino.jpg';
import pietroFixed from '../assets/hum1020/pietro-perugino-fixed.jpg';
import madonna from '../assets/hum1020/madonna-with-child.jpg';
import madonnaFixed from '../assets/hum1020/madonna-with-child-fixed.jpg';

export default [
  {
    image: delivery,
    imageEffect: deliveryFixed,
    name: 'The Delivery of the Keys to Saint Peter',
    author: 'Pietro Perugino',
    wikipedia: 'https://en.wikipedia.org/wiki/Delivery_of_the_Keys_(Perugino)',
    year: '1481–1482',
    technique: 'Linear perspective',
    id: 'linear'
  },
  {
    image: agony,
    imageEffect: agonyFixed,
    name: 'The Agony in the Garden',
    author: 'Andrea Mantegna',
    wikipedia: 'https://en.wikipedia.org/wiki/Agony_in_the_Garden_(Mantegna,_London)',
    year: '1455',
    technique: 'Aerial prospective',
    id: 'aerial'
  },
  {
    image: pietro,
    imageEffect: pietroFixed,
    name: 'Pietà',
    author: 'Pietro Perugino',
    wikipedia: 'https://en.wikipedia.org/wiki/Piet%C3%A0_(Perugino)',
    year: '1483–1493',
    technique: 'Chiaroscuro',
    id: 'chiaroscuro'
  },
  {
    image: madonna,
    imageEffect: madonnaFixed,
    name: 'Madonna and Child with Saints',
    author: 'Luca Signorelli',
    wikipedia: 'https://en.wikipedia.org/wiki/Madonna_and_Child_with_Saints_(Signorelli,_Arezzo)',
    year: '1519–1523',
    technique: 'Sfumato',
    id: 'sfumato'
  }
];

export const githubLink = 'https://github.com/abranhe/school/blob/master/src/classes/hum1020.js';