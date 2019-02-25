import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';
import Conatiner from './app1/container'

class App extends Component {
  render() {
    return (
      <div className="App">        
        <Conatiner />
      </div>
    );
  }
}

export default App;
