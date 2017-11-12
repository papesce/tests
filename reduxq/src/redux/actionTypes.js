/*
 * Action types
 */


export const ADD_TODO = 'ADD_TODO';
//  {
//    type: ADD_TODO,
//    text: "build my first redux app"
//  }
const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
//  {
//    type: TOGGLE_TODO,
//    index: 5
//  }
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
// {
//   type: SET_VISIBILITY_FILTER
//   filter: SHOW_COMPLETED
// }    
export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
} 

// export {ADD_TODO, REMOVE_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER};



