// Application entry
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { Router, Route, browserHistory, useRouterHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import AllInOneReducer from './reducers'
import ApplicationContainer from './containers/ApplicationContainer'
import initialStateUtil, {getInitialState} from './util/initialStateUtil'

let store = createStore(AllInOneReducer,getInitialState(),applyMiddleware(thunk))
// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)

const rootEL = document.getElementById('react-app');
render(
  <Provider store={store}>
    { /* Tell the Router to use our enhanced history */ }
    <Router history={history}>
      <Route path="/" component={ApplicationContainer}>
        <Route path="foo" component={ApplicationContainer}/>
        <Route path="bar" component={ApplicationContainer}/>
      </Route>
    </Router>
  </Provider>,
  rootEL
)
