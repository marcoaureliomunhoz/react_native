import React, { Component } from 'react'
import { View, Text, ListView, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Actions } from 'react-native-router-flux'

import {
  contatosUsuarioFetch
} from '../actions/appActions'

class FormPrincipalAbaContatos extends Component {

  componentWillMount() {
    this.props.contatosUsuarioFetch()
    this.defineFonteDados(this.props.lista)
  }

  componentWillReceiveProps(nextProps) {
    this.defineFonteDados(nextProps.lista)
  }

  defineFonteDados(contatos) {
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
    this.fonteDados = ds.cloneWithRows(contatos)
  }

  renderRow(contato) {
    return (
      <TouchableOpacity
        onPress={() => Actions.conversa({ 
            title: contato.nome,
            contatoNome: contato.nome, 
            contatoEmail: contato.email 
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
          <Text style={{ fontWeight: 'bold' }}>{contato.nome}</Text>
          <Text style={{ fontSize: 10 }}>{contato.email}</Text>
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
  lista: state.listaContatos.lista
})
const mapDispatchToProps = dispatch => bindActionCreators({
  contatosUsuarioFetch
}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(FormPrincipalAbaContatos)
