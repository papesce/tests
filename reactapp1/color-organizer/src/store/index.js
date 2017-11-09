import { createStore, combineReducers, applyMiddleware } from 'redux'
import { colors } from './reducers'
import stateData from '../../data/initialState'

const clientLogger = store => next => action => {
    if (action.type) {
        let result
        console.groupCollapsed("dispatching", action.type)
        console.log('prev state', store.getState())
        console.log('action', action)
        result = next(action)
        console.log('next state', store.getState())
        console.groupEnd()
        return result
    } else {
        return next(action)
    }
}



const middleware = server => [
    (server) ? serverLogger : clientLogger,
    thunk
]


const storeFactory = (server = false, initialState = {}) =>
applyMiddleware(...middleware(server))(createStore)(
    combineReducers({colors}),
    initialState
)

export default storeFactory