import {SET_TOKEN, SEARCH_TERM} from './actionTypes'


export function tokenReducer(state = '', action) {
  switch (action.type) {
  case SET_TOKEN:
    return action.token;
  default:       
  } 
  return state;
} 


export function searchReducer(state = [], action) {
  switch (action.type) {
  case SEARCH_TERM: 
    //debugger;
    return state.concat(action.albums) ;
  default:
  }
  return state;
}