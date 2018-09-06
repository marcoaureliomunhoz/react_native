import React, { Component } from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducers from './src/Reducers'

import FormCadastro from './src/FormCadastro'

export default class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <FormCadastro />
      </Provider>
    )
  }
}
