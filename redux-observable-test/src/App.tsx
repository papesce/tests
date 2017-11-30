import * as React from 'react';
import './App.css';
import './myscript.ts';
import CounterContainer from './containers/CounterContainer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { StoreState } from './types/index';
import rootReducer from './reducers/index';

const logo = require('./logo.svg');

const store = createStore<StoreState>(rootReducer, {
  counter : 0
//  enthusiasmLevel: 1,
//  languageName: 'TypeScript',
});

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Provider store={store}>
          <CounterContainer/>
        </Provider>
      </div>
    );
  }
}

export default App;
