import * as actions from '../actions';
import { StoreState } from '../types/index';
import { INCREMENT } from '../constants/index';
import { combineReducers, Reducer } from 'redux';

const rootReducer: Reducer<StoreState> = combineReducers({
    counter: enthusiasm,
  });

export function enthusiasm(prevCounter: number = 0, action: actions.Action): number {
  switch (action.type) {
    case INCREMENT:
      return  prevCounter + 1 ;
     default:
  }  
  return prevCounter;
}

export default rootReducer;