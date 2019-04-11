import React, { Component } from 'react';
import data from '../../data/hum1020';
import Footer from '../../components/footer';

import '../../styles/index.css';

const url = 'https://school.abranhe.com/hum1020/';

class hum1020 extends Component {
  render() {
    const assignments = data.map((assignment, key) => {
      return (
        <div key={key}>
          <a className="link" href={url + assignment.link}>
            <img src={assignment.image} alt={assignment.name} height={300} />
          </a>
          <p>
            <a className="link" href={url + assignment.link}>
              {assignment.name}
            </a>
          </p>
        </div>
      );
    });
    return (
      <div className="default">
        <h2>HUM1020 Assignments</h2>
        {assignments}
        <br />
        <Footer />
        <br />
      </div>
    );
  }
}

export default hum1020;
