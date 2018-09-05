import React, { Component } from 'react'
import { View, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { 
  MyPanel, MyButton, 
  MyTextInput, MyMessageText,
  MyIf 
} from './shared'
import { 
  onChangeKey, 
  btnSalvarClick, 
  setError, 
  setStatusForm
} from '../actions/autenticacaoActions'

class FormCadastro extends Component {

  componentWillMount() {
    this.props.setError('')
  }

  salvar() {
    this.props.setStatusForm(0)
    this.props.btnSalvarClick(this.props.autenticacao)
  }

  render() {
    return (
      <MyPanel>
        <View style={{ marginTop: 50, paddingHorizontal: 20 }}>
          <MyTextInput 
            placeholder='Nome' 
            value={this.props.autenticacao.nome} 
            editable={!(this.props.autenticacao.statusForm === 0)}
            onChangeText={(value) => this.props.onChangeKey('nome', value)}
          />
          
          <MyTextInput 
            placeholder='E-mail' 
            value={this.props.autenticacao.email} 
            editable={!(this.props.autenticacao.statusForm === 0)}
            onChangeText={(value) => this.props.onChangeKey('email', value)}
          />

          <MyTextInput 
            placeholder='Senha' 
            secureTextEntry
            value={this.props.autenticacao.senha}
            editable={!(this.props.autenticacao.statusForm === 0)}
            onChangeText={(value) => this.props.onChangeKey('senha', value)}
          />
        </View>

        <MyMessageText 
          textColor='red' 
          text={this.props.autenticacao.erroCadastro} 
        />

        <View style={{ marginTop: 50, paddingHorizontal: 20 }}>
          <MyIf test={this.props.autenticacao.statusForm === 1}>
            <MyButton 
              title='Salvar' 
              disabled={this.props.autenticacao.statusForm === 0}
              onPress={() => this.props.btnSalvarClick(this.props.autenticacao)} 
            />
          </MyIf>
          <MyIf test={this.props.autenticacao.statusForm !== 1}>
            <ActivityIndicator size='large' />
          </MyIf>
        </View>
      </MyPanel>
    )
  }
}

const mapStateToProps = state => ({
  autenticacao: state.autenticacao
})
const mapDispatchToProps = dispatch => bindActionCreators({
  onChangeKey, btnSalvarClick, setError, setStatusForm
}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(FormCadastro)
