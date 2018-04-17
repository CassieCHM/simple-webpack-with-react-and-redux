import { combineReducers } from 'redux'
import todos from './Test/todos'
import visibilityFilter from './Test/visibilityFilter'

const todoApp = combineReducers({
    todos,
    visibilityFilter
})

export default todoApp