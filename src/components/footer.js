import React, { Component } from 'react';
import { githubLink, name } from '../data';
import { copyright, date } from '../data/symbols';

class Footer extends Component {
  render() {
    return (
      <footer>
        {date} {copyright} {name} | This website is open source on{' '}
        <a className="link" href={githubLink}>
          github
        </a>.
      </footer>
    );
  }
}

export default Footer;
