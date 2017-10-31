import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



class Button extends React.Component {
  constructor(props){
    super(props);
    this.state = {counter : 0};
  }
  handleClick = () => {
    this.setState((prevState) => {return {counter: prevState.counter + 1}});
    console.log(`Clicked ${this.state.counter}`)
  } 
  render() {
    return (<div>
      <button onClick={this.handleClick}>{this.props.title + 
        this.state.counter}</button>
      </div>)
  }
}

class Form extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Submited");
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}> 
        <button type="submit">Submit</button>
        </form>
    );
  }
}

//function Button (props) {
  // let {title} = props;
  // return (<div>
  // <button type="submit">{props.title}</button>
  // </div>)
// }



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
        <Button title="Button title "/>
        <Form />
        </div>
    );
  }
}

export default App;
