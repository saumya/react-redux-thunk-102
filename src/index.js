// Application entry
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import AllInOneReducer from './reducers'
import ApplicationContainer from './containers/ApplicationContainer'
import initialStateUtil, {getInitialState} from './util/initialStateUtil'

let store = createStore(AllInOneReducer,getInitialState(),applyMiddleware(thunk));
const rootEL = document.getElementById('react-app');
render(
  <Provider store={store}>
    <ApplicationContainer />
  </Provider>,
  rootEL
)
