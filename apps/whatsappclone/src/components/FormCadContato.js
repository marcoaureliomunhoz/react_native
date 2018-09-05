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
  setError, 
  setStatusForm,
  adicionarContato
} from '../actions/appActions'

class FormCadContato extends Component {

  componentWillMount() {
    this.props.setError('')
  }

  btnAdicionarClick() {
    this.props.setStatusForm(0)
    this.props.adicionarContato(this.props.app.email)
  }

  render() {
    return (
      <MyPanel>
        <View style={{ marginTop: 50, paddingHorizontal: 20 }}>
          <MyTextInput 
            placeholder='E-mail' 
            value={this.props.app.email} 
            editable={!(this.props.app.statusForm === 0)}
            onChangeText={(value) => this.props.onChangeKey('email', value)}
          />          
        </View>

        <MyMessageText 
          textColor='red' 
          text={this.props.app.erroCadastro} 
        />

        <View style={{ marginTop: 50, paddingHorizontal: 20 }}>
          <MyIf test={this.props.app.statusForm === 1}>
            <MyButton 
              title='Adicionar' 
              disabled={this.props.app.statusForm === 0}
              onPress={() => this.btnAdicionarClick()} 
            />
          </MyIf>
          <MyIf test={this.props.app.statusForm !== 1}>
            <ActivityIndicator size='large' />
          </MyIf>
        </View>
      </MyPanel>
    )
  }
}

const mapStateToProps = state => ({
  app: state.app
})
const mapDispatchToProps = dispatch => bindActionCreators({
  onChangeKey, setError, setStatusForm, adicionarContato
}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(FormCadContato)
