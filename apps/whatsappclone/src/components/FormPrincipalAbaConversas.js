import React, { Component } from 'react'
import { View, Text, ListView, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Actions } from 'react-native-router-flux'

import {
  conversasUsuarioFetch
} from '../actions/appActions'

class FormPrincipalAbaConversas extends Component {

  componentWillMount() {
    this.props.conversasUsuarioFetch()
    this.defineFonteDados(this.props.lista)
  }

  componentWillReceiveProps(nextProps) {
    this.defineFonteDados(nextProps.lista)
  }

  defineFonteDados(conversas) {
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
    this.fonteDados = ds.cloneWithRows(conversas)
  }

  renderRow(conversa) {
    return (
      <TouchableOpacity
        onPress={() => Actions.conversa({ 
            title: conversa.nome,
            contatoNome: conversa.nome, 
            contatoEmail: conversa.email 
          })}
      >
        <View 
          style={{ 
            paddingVertical: 10, 
            paddingHorizontal: 15, 
            borderBottomWidth: 1, 
            borderColor: '#ccc' 
          }}
        >
          <Text style={{ fontWeight: 'bold' }}>{conversa.nome}</Text>
          <Text style={{ fontSize: 10 }}>{conversa.email}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <ListView 
        enableEmptySections
        dataSource={this.fonteDados}
        renderRow={this.renderRow}
        style={{ backgroundColor: 'white' }}
      />
    )
  }
}

const mapStateToProps = state => ({
  lista: state.listaConversas.conversas
})
const mapDispatchToProps = dispatch => bindActionCreators({
  conversasUsuarioFetch
}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(FormPrincipalAbaConversas)
