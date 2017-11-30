import * as constants from '../constants/index';

// export interface Action<P> {
//    type: string;
//    payload: P;
//    error?: boolean;
// }

export interface Increment {
    type: constants.INCREMENT;
}
export interface IncrementStarted {
    type: constants.INCREMENT_STARTED;
}
export interface IncrementCanceled {
    type: constants.INCREMENT_CANCELED;
}

export type Action = Increment | IncrementStarted | IncrementCanceled;

// action creators:

export function incrementStarted(): IncrementStarted {
    return {
        type: constants.INCREMENT_STARTED
    };
}

export function incrementCanceled(): IncrementCanceled {
    return {
        type: constants.INCREMENT_CANCELED
    };
}
export function increment(): Increment {
    return {
        type: constants.INCREMENT
    };
}
