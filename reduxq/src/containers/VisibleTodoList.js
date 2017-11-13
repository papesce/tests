import React from 'react'
import {connect} from 'react-redux'
import TodoList from '../components/TodoList'
import {toggleTodo} from '../redux/actions'
import {VisibilityFilters} from '../redux/actionTypes'

function filter(todos, filter) {
    switch (filter) {
    case VisibilityFilters.SHOW_ALL:
        return todos
    case VisibilityFilters.SHOW_COMPLETED:
        return todos.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
        return todos.filter(t => !t.completed)
    default :
        return todos 
    }
}

const mapStateToPros = (state, ownProps) => {
    return {
        todos: filter(state.todos, state.visibilityFilter)
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onTodoClick : (index) => {dispatch(toggleTodo(index))}
    }
}


const VisibleTodoList = connect(mapStateToPros, mapDispatchToProps) (TodoList) 

export default VisibleTodoList