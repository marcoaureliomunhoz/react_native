import React, { Component } from 'react'
import { Text, View, ActivityIndicator, StatusBar } from 'react-native'
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { 
  MyImagePanel, MyButton, MyTextInput, 
  MyTouchableOpacity, MyMessageText, MyIf
} from './shared'
import { 
  onChangeValue, onChangeKey, autenticarUsuario, 
  setStatusForm, carregarCredenciais
} from '../actions/autenticacaoActions'

import ImgBackground from '../assets/img/bg.png'

class FormLogin extends Component {
  
  componentWillMount() {
    this.props.carregarCredenciais()
    this.props.setStatusForm(1)
  }

  /* boa prática: acionar função local do componente antes de acionar ActionCreator */
  btnAcessarClick() {
    this.props.setStatusForm(0)
    this.props.autenticarUsuario(this.props.autenticacao.email, this.props.autenticacao.senha)
  }
  
  render() {
    return (
      <MyImagePanel img={ImgBackground}>
        <StatusBar backgroundColor='#11574D' />
        <View style={{ height: 100, justifyContent: 'center' }}>
          <Text 
            style={{ 
              textAlign: 'center', 
              fontSize: 22, 
              fontWeight: '500', 
              color: '#fff' 
            }}
          >
            WhatsApp Clone
          </Text>
        </View>
        <View style={{ paddingHorizontal: 20 }}>
          
          <MyTextInput 
            placeholder='E-mail' 
            textColor='white'
            placeholderTextColor='white'
            underlineColorAndroid='white'
            editable={!(this.props.autenticacao.statusForm === 0)}
            value={this.props.autenticacao.email} 
            onChangeText={(value) => this.props.onChangeValue('EMAIL', value)}
          />

          <MyTextInput 
            placeholder='Senha' 
            textColor='white'
            placeholderTextColor='white'
            underlineColorAndroid='white'
            secureTextEntry
            editable={!(this.props.autenticacao.statusForm === 0)}
            value={this.props.autenticacao.senha}
            onChangeText={(value) => this.props.onChangeKey('senha', value)}
          />

          <MyTouchableOpacity 
            title='Ainda não tem cadastro? Cadastre-se!'            
            style={{ marginTop: 20 }}
            textColor='white'
            onPress={() => Actions.cadastro()}
          />
        </View>
        <View style={{ marginTop: 50, paddingHorizontal: 20 }}>
          <MyIf test={this.props.autenticacao.statusForm === 1}>
            <MyButton 
              title='Acessar' 
              disabled={this.props.autenticacao.statusForm === 0}
              onPress={() => this.btnAcessarClick()} 
            />
          </MyIf>
          <MyIf test={this.props.autenticacao.statusForm !== 1}>
            <ActivityIndicator size='large' />
          </MyIf>
          <MyMessageText 
            textColor='red' 
            text={this.props.autenticacao.erroLogin} 
          />
        </View>
      </MyImagePanel>
    )
  }
}

const mapStateToProps = state => ({
  autenticacao: state.autenticacao
})
const mapDispatchToProps = dispatch => bindActionCreators({
  onChangeValue, 
  onChangeKey, 
  autenticarUsuario, 
  setStatusForm, 
  carregarCredenciais
}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(FormLogin)
