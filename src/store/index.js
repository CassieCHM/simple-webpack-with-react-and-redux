import { createStore } from 'redux'
import reducers from 'SRC/redux/index'

export const store = createStore(reducers)