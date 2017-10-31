import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function InputForm () {
  return (
    <form target="_blank" action="https://google.com/search">
      <div>Enter input and click search</div>
      <input name="q" className="input"/>
      <Button title="Search2"/> 
    </form>
  )
} 

const RandomValue = ()  => <div>{Math.floor(Math.random() * 100)} </div>

//const InputForm = React.createElement(
//  "form",
//  { target: "_blank", action: "https://google.com/search" },
//  React.createElement("div", null, "Enter input and click Search"),
//  React.createElement("input", { name: "q", className: "input" }),
//  React.createElement(Button, { title: "Search" })
//);

const MaybeError = ({errorMessage}) => <div>
    {errorMessage && <ErrorDisplay message={errorMessage}/>}
  </div>; 

const ErrorDisplay = ({message}) => <div
 style={{color:"red", background:"yellow"}}
>{message}</div>

function Button (props) {
  let {title} = props;
  return (<div>
  <button type="submit">{props.title}</button>
  </div>)
}

const Doubler = ({value = [1,2,3]}) => 
  <div>{value.map(e => e * 2 + ",")}</div>;

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
        <InputForm/>
        <RandomValue/>
        {/*<ErrorDisplay message="error message"/>*/}
        <MaybeError errorMessage={Math.random() > 0.5 ? "Random error" : ""}/>
        <Doubler value={[2]}/>
      </div>
    );
  }
}

export default App;
