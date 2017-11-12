import {combineReducers} from 'redux';

import {VisibilityFilters, SET_VISIBILITY_FILTER, ADD_TODO, TOGGLE_TODO} from './actionTypes'
/**
 * Reducers
 */

const initialState = { 
    visibilityFilter  : VisibilityFilters.SHOW_ALL,
    todos: []
};

//main reducer
//function todoAPP(prevState, action) {
//if (typeof prevState === 'undefined') {
//    return initialState;
//}
//}

function todos(prevState = [] , action) {
    switch (action.type) {
    case ADD_TODO:
        return [...prevState,
            { text: action.text,
                completed: false
            }
        ]
    case TOGGLE_TODO:
        return prevState.map((todo, index) => {
            if (index === action.index) {
                return Object.assign({}, todo, {completed: !todo.completed})
            } else {
                return todo
            } 
        })
    default: return prevState;     
    }
}

function visibilityFilter(prevState = VisibilityFilters.SHOW_ALL, action) {
    switch (action.type) {
    case SET_VISIBILITY_FILTER:
        return action.filter;
    default: return prevState;     
    }
}

//function todoAPP (prevState = initialState, action) {  
// return 
//return {
//    visibilityFilter: visibilityFilter(prevState.visibilityFilter,action),
//    todos: todos(prevState.todos, action)
//}
//}

const todoApp = combineReducers({visibilityFilter, todos});
//const todoApp = combineReducers(
//    {visibilityFilter: vfReducer,
//     todos: todoReducer}
//);


export default todoApp;
