import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Humanities from './classes/hum1020';

const Home = () => {
  return (
    <div className='App'>
      <div className='App-header'>
        <h1 align='center'>School Projects</h1>
        <div>
          <a href='https://github.com/abranhe'>
            <img
              src='https://img.shields.io/github/followers/abranhe.svg?label=Follow%20%40abranhe&style=social'
              alt='github'
            />
          </a>{' '}
          <a href='https://twitter.com/abranhe'>
            <img src='https://img.shields.io/twitter/follow/abranhe.svg?style=social' alt='twitter' />
          </a>
        </div>
      </div>
    </div>
  );
};

const NoMatch = () => {
  return (
    <div className='App'>
      <div className='App-header'>
        <h1 align='center'>Nothing Found :/</h1>
        <p align='center'>Why are you here?</p>
      </div>
    </div>
  );
};

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/hum1020' component={Humanities} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    );
  }
}

export default App;
