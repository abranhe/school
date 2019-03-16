import React, { Component } from 'react';

class Art extends Component {
  render() {
    return (
      <div className='App' id={this.props.idName}>
        <div className='imageBox'>
          <div className='imageIn'>
            <img src={this.props.imageUrl} alt='logo' width='700' />
          </div>
          <div className='hoverImg'>
            <img src={this.props.imageEffectUrl} alt='logo' width='700' />
          </div>
        </div>
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
        <a className='link' href={this.props.learnMoreUrl} target='_blank' rel='noopener noreferrer'>
          Learn more
        </a>
      </div>
    );
  }
}

export default Art;
