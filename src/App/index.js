import React, { Component } from 'react';
import Background from '../Background';
import AppCards from '../AppCards';

import positive from './positive.jpg'; // https://pixabay.com/en/positive-awesome-sun-happy-poster-2223126/

import './style.scss';

class App extends Component {
  render() {
    return (
      <main>
        <Background image={positive} />
        <div>
          <h1>
            <span className="rust">apps</span> thatawe
          </h1>
          <h2>
            happily introducing <span>our first app</span>
          </h2>
        </div>
        <AppCards />
      </main>
    );
  }
}

export default App;
