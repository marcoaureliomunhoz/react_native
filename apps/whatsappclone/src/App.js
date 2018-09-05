import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import firebase from '@firebase/app'
import reducers from './reducers'
import Routes from './Routes'
import * as Config from './Config'

export default class App extends Component {

  componentWillMount() {
    firebase.initializeApp({
      apiKey: Config.apiKey,
      authDomain: Config.authDomain,
      databaseURL: Config.databaseURL,
      projectId: Config.projectId,
      storageBucket: Config.storageBucket,
      messagingSenderId: Config.messagingSenderId
    })
  }

  render() {
    return (
      <Provider store={applyMiddleware(thunk)(createStore)(reducers)}>
        <Routes />
      </Provider>
    )
  }
}
