import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

import store from './redux/store'
import {addTodo, toggleTodo, setVisibilityFilter} from './redux/actions'
import { VisibilityFilters } from './redux/actionTypes';

const unsuscribe = store.subscribe(() => {
    console.log(store.getState());
})
unsuscribe();

class App extends Component {
    componentWillMount(){
        
        store.dispatch(addTodo('todo1'));
        store.dispatch(addTodo('todo2'));
        store.dispatch(toggleTodo(1));
        store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_ACTIVE))
    }  
    render() {
      
        return (
            <div className="App">
                {JSON.stringify(store.getState())}
            </div>
        );
    }
}

export default App;
