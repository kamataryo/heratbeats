import { createStore, combineReducers, applyMiddleware } from 'redux'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

/**
 * Reducers
 */
import animalsReducer from 'reducers/animals'
import browserMetaReducer from 'reducers/browser-meta'

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
    browserMeta: browserMetaReducer,
    router: routerReducer,
  }),
  applyMiddleware(...middlewares),
)

/**
 * export
 */
export default store
