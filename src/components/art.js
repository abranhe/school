import React, { Component } from 'react';
import '../App.css';

class Art extends Component {
  render() {
    return (
      <div className='App' id={this.props.idName}>
        <img src={this.props.imageUrl} alt='logo' width='700'/>
        {/* </header> */}
        <h3>{this.props.artName}</h3>
        <p>
          <b>
            <small>Author:</small>
          </b>{' '}
          {this.props.author}
        </p>
        <p>
          <b>
            <small>Created:</small>
          </b>{' '}
          {this.props.year}
        </p>
        <p>
          <b>
            <small>Painting techniques:</small>
          </b>{' '}
          {this.props.technique}
        </p>
        <a className='App-link' href={this.props.learnMoreUrl} target='_blank' rel='noopener noreferrer'>
          Learn more
        </a>
      </div>
    );
  }
}

export default Art;
