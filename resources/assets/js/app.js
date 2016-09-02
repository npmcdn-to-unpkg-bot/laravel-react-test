 import React from 'react'
 import { render } from 'react-dom'
 import { createStore, applyMiddleware } from 'redux'
 import { Provider } from 'react-redux'
 import thunkMiddleware from 'redux-thunk'
 import createLogger from 'redux-logger'

 import RouteMap from './RouteMap'
 import reducer from './reducer/index'

 const loggerMiddleware = createLogger()

 const configureStore = (preloadState) => {
     return createStore(
         reducer,
         preloadState,
         applyMiddleware(
             thunkMiddleware,
             loggerMiddleware
         )
     )
 }

 const store = configureStore()

 render(
     <Provider store={store}>
         <RouteMap />
     </Provider>,
     document.getElementById('example')
 )