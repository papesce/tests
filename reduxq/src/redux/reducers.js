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

function todoAPP (prevState = initialState, action) {
    switch (action.type) {
    case SET_VISIBILITY_FILTER:
        return {...prevState, visibilityFilter: action.filter };
    case ADD_TODO:
        return {...prevState, todos: [
            ...prevState.todos,
            { text: action.text,
                completed: false
            }
        ]
        }
    case TOGGLE_TODO:
        return {...prevState, todos: 
        prevState.todos.map((todo, index) => {
            if (index === action.index) {
                return Object.assign({}, todo, {completed: !todo.completed})
            } else {
                return todo
            } 
        })
        }
    default: return prevState;     
    }
}

