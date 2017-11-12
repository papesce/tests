import {ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER} from './actionTypes'

/*
 * Action creators
 */

//action creator that returns an ADD_TODO action
export function addTodo(text) {
    return { type: ADD_TODO, text }
}

export function toggleTodo(index) {
    return { type: TOGGLE_TODO, index}
}

export function setVisibilityFilter(filter) {
    return { type: SET_VISIBILITY_FILTER, filter}
}



//const boundAddTodo = text => dispatch(addTodo(text));