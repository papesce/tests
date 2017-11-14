import {createStore, combineReducers, applyMiddleware} from 'redux'
import {routerReducer, routerMiddleware} from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import { createLogger } from 'redux-logger'
import {tokenReducer, searchReducer} from './reducers'
import {searchMiddleware} from './middleware'
import {initialState} from './state'

// Create a history of your choosing (we're using a browser history in this case)
export const history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
const rMiddleware = routerMiddleware(history);


// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
export const store = createStore(
  combineReducers({
    //...reducers,
    token: tokenReducer,
    albums: searchReducer, 
    router: routerReducer
  }), initialState,
  applyMiddleware(searchMiddleware, rMiddleware,  createLogger())
)