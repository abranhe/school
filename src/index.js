import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';

import './styles/index.css';
import {links, badges} from './data';

// HUM102O
import Hum1020 from './classes/hum1020';
import Renaissance from './classes/hum1020/renaissance';
import Baroque from './classes/hum1020/baroque';
import Concert from './classes/hum1020/concert';

const Home = () => {
  return (
    <div className='default'>
      <div className='defaultStyle'>
        <h1 align='center'>School Projects</h1>
        <div>
          <a href={links.github}>
            <img src={badges.github} alt='github' />
          </a>{' '}
          <a href={links.twitter}>
            <img src={badges.twitter} alt='twitter' />
          </a>
        </div>
      </div>
    </div>
  );
};

const NoMatch = () => {
  return (
    <div className='default'>
      <div className='defaultStyle'>
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
          <Route exact path='/hum1020' component={Hum1020} />
          <Route exact path='/hum1020/renaissance' component={Renaissance} />
          <Route exact path='/hum1020/baroque' component={Baroque} />
          <Route exact path='/hum1020/concert' component={Concert} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById('root'));
