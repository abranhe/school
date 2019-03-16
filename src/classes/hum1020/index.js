import React, { Component } from 'react';
import data from '../../data/hum1020';
import { githubLink } from '../../data';
import '../../styles/index.css';

const url = 'https://school.abranhe.com/hum1020/';

class Baroque extends Component {
  render() {
    const assignments = data.map((assignment, key) => {
      return (
        <div key={key}>
          <a className='link' href={url + assignment.link}>
            <img src={assignment.image} alt={assignment.name} height={300} />
          </a>
          <p>
            <a className='link' href={url + assignment.link}>
              {assignment.name}
            </a>
          </p>
        </div>
      );
    });
    return (
      <div className='default'>
        <h2>HUM1020 Assignments</h2>
        {assignments}
        <br />
        <footer>
          &copy; Carlos Abraham Hernandez | This website is open source on{' '}
          <a className='link' href={githubLink}>
            github
          </a>.
        </footer>
        <br />
      </div>
    );
  }
}

export default Baroque;
