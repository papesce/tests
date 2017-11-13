import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux'
import {store, history} from './redux/store'
import {ConnectedRouter} from 'react-router-redux'
import {Route} from 'react-router'
import Home from './components/Home'
import Login from './components/Login'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <ConnectedRouter history={history}>
             <div>
                  <Route exact path="/" component={Home} />
                  <Route path="/login" component={Login} />
               </div>
          </ConnectedRouter>
      </div>
      </Provider>
    );
  }
}

export default App;
