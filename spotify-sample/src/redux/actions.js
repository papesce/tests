import {SEARCH_TERM, SET_TOKEN} from './actionTypes';

//
//const searchTerm = {
//  type : SEARCH_TERM,
//  text : ""
//} 

//action creators
export function searchTerm(text) {
  return {type: SEARCH_TERM, text}
}

export function setToken(token) {
  return {type: SET_TOKEN, token}
}