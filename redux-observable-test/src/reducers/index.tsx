import { EnthusiasmAction } from '../actions';
import { StoreState } from '../types/index';
import { INCREMENT_ENTHUSIASM } from '../constants/index';
import { combineReducers, Reducer } from 'redux';

const rootReducer: Reducer<StoreState> = combineReducers({
    counter: enthusiasm,
  });

export function enthusiasm(prevCounter: number = 0, action: EnthusiasmAction): number {
  switch (action.type) {
    case INCREMENT_ENTHUSIASM:
      return  prevCounter + 1 ;
//    case DECREMENT_ENTHUSIASM:
//      return { ...state, enthusiasmLevel: Math.max(1, state.counter - 1) };
      default:
  }  
  return prevCounter;
}

export default rootReducer;