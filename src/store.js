import { createStore, combineReducers, applyMiddleware } from 'redux'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

/**
 * Reducers
 */
import animalsReducer from 'reducers/animals'

/**
 * Browser history
 * @type {object}
 */
export const history = createHistory()

/**
 * middlewares
 * @type {Array<function>}
 */
const middlewares = [routerMiddleware(history)]

/**
 * store
 * @type {object}
 */
const store = createStore(
  combineReducers({
    animals: animalsReducer,
    router: routerReducer,
  }),
  applyMiddleware(...middlewares),
)

/**
 * export
 */
export default store
