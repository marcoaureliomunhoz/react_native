import React, { Component } from 'react'
import { TabView, SceneMap } from 'react-native-tab-view'

import FormPrincipalTabBar from './FormPrincipalTabBar'
import FormPrincipalAbaContatos from './FormPrincipalAbaContatos'
import FormPrincipalAbaConversas from './FormPrincipalAbaConversas'

export default class FormPrincipal extends Component {
  state = {
    index: 0,
    routes: [      
      { key: 'conversas', title: 'Conversas' },
      { key: 'contatos', title: 'Contatos' }
    ],
  }

  handleIndexChange = index => this.setState({ index })

  renderTabBar = props => <FormPrincipalTabBar {...props} />

  renderScene = SceneMap({    
    conversas: FormPrincipalAbaConversas, 
    contatos: FormPrincipalAbaContatos
  })

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={this.renderScene}
        renderTabBar={this.renderTabBar}
        onIndexChange={this.handleIndexChange}
      />
    )
  }
}
