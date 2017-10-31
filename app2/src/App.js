import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Menu, data} from './Recipe'



class App extends Component {
  render() {
    //return InputForm;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Menu recipes={data} title="Delicious Recipes" />
        </div>
    );
  }
}

export default App;
