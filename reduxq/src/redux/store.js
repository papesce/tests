import {createStore} from 'redux';
import todoApp from './reducers'
import {VisibilityFilters} from './actionTypes'

let initial = {visibilityFilter: VisibilityFilters.SHOW_ALL, todos : [
    {text: 'sample todo', completed: true}] }

let store = createStore(todoApp, initial);
store.subscribe(() => {
    console.log(store.getState())
})


export default store;
