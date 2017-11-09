/**
 * React related
 */
import React from 'react'
import { Provider } from 'react-redux'

/**
 * Components
 */
import { Router, Route } from 'react-router-dom'
import store, { history } from 'store'
import MainView from 'components/main-view'

/**
 * @return {function} App Container
 */
const AppContainer = () => {
  return (
    <Provider store={ store }>
      <Router history={ history }>
        <Route path="/" component={ MainView } exact />
      </Router>
    </Provider>
  )
}

/**
 * export
 */
export default AppContainer
