import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
//import Todo from './components/Todo'
import Footer from './components/Footer'
import VisibleTodoList from './containers/VisibleTodoList'
import AddTodo from './containers/AddTodo'
import {Provider} from 'react-redux'

import store from './redux/store'
//import { VisibilityFilters } from './redux/actionTypes';

class App extends Component {
    render() { 
        return (
            <div className="App">
                <Provider store={store}>
                    <div>
                        <AddTodo />
                        <VisibleTodoList />
                        <Footer />
                    </div>
                </Provider>
            </div>
        );
    }
}

export default App;
