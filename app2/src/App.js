import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//type Expense {
//  description: string
//  category: string
//}

const NoProps = () => {
  let x = 1;
  return (
  <div className='logo'> {x} No props </div>
)};


const WithProps = (props) => (
  <div className='logo'> {props.expense.name}
  </div>
);


const WithSpecificProps = (props) => (
  <div className='logo'> {props.name}
  </div>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <NoProps/>
        <WithProps expense={{"name":"exp1", "notused":"notused"}}/>
        <WithSpecificProps name={"exp2"}/>
        
      </div>
    );
  }
}

export default App;
