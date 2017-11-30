import { combineEpics, ActionsObservable } from 'redux-observable';
import {  } from 'rxjs/Observable';
import * as actions from '../actions/index';
import { INCREMENT_STARTED, INCREMENT_CANCELED } from '../constants/index';

const startCountdownEpic = (action$: ActionsObservable<actions.Action>) => {
  return  action$.ofType(INCREMENT_STARTED)
  .throttleTime(1000)
  // .debounceTime(1000)  
  .delay(3000) // Asynchronously wait 1000ms then continue  
  .mapTo(actions.increment())
  .takeUntil(action$.ofType(INCREMENT_CANCELED))
  ;
};

/**
 * there is only one epic.
 */
export const rootEpic = combineEpics(
    startCountdownEpic
  );