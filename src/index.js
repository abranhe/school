import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';

import './index.css';
import data from './data/personal';

import Humanities from './classes/hum1020';

const Home = () => {
  return (
    <div className='App'>
      <div className='App-header'>
        <h1 align='center'>School Projects</h1>
        <div>
          <a href={data.github}>
            <img src={data.githubBadge} alt='github' />
          </a>{' '}
          <a href={data.twitter}>
            <img src={data.twitterBadge} alt='twitter' />
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
          <Route path='/hum1020' component={Humanities} />
          <Route path='/hum1020/renaissance' component={Humanities} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById('root'));
