import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux'
import {store, history} from './redux/store'
import {ConnectedRouter} from 'react-router-redux'
import {Route} from 'react-router'
import HomePage from './components/HomePage'
import LoginPage from './components/LoginPage'
import TokenContainer from './components/TokenContainer'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

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
            <MuiThemeProvider>
              <Route exact path="/" component={HomePage} />
              <Route path="/login" component={LoginPage} />
              <Route path="/token/:accessToken" component={TokenContainer} />
            </MuiThemeProvider>
          </ConnectedRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
