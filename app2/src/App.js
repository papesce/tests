import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const InputForm = React.createElement(
  "form",
  { target: "_blank", action: "https://google.com/search" },
  React.createElement("div", null, "Enter input and click Search"),
  React.createElement("input", { name: "q", className: "input" }),
  React.createElement(Button, { title: "Search" })
);

function Button (props) {
  return (<div>
   <input type="text" name="text"/>  
  <button type="submit">{props.title}</button>
  </div>)
}

class App extends Component {
  render() {
    return InputForm;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button title={"Title"}/>
        
        
      </div>
    );
  }
}

export default App;
