import React, { Component } from 'react'
import { Text, View, Button, TextInput } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Field, reduxForm, formValueSelector } from 'redux-form'

import { init, salvar, alterar } from './Actions'

const MyTextInput = ({ input: { onChange, ...restInput }}) => {
  /*console.log('MyTextInput input: ', restInput)*/
  return <TextInput 
            style={{ height: 48 }} 
            onChangeText={onChange} 
            {...restInput} 
         />
}

/*
const MyTextInput = (props) => {
  //console.log('MyInput props: ', props)
  const { onChange, ...restInput } = props.input
  //console.log('MyInput restInput: ', restInput)
  return <TextInput 
            style={{ height: 48 }} 
            onChangeText={onChange} 
            {...restInput} 
         />
}
*/

class FormCadastro extends Component {

  /*constructor(props) {
    super(props)
    console.log('FormCadastro constructor props: ', props)
  }*/

  componentWillMount() {
    //console.log('FormCadastro componentWillMount props: ', this.props)
    this.props.init()
  }

  alterar() {
    //console.log('FormCadastro alterar')
    this.props.alterar({ nome: 'marco', email: 'marco@gmail.com' })
  }

  render() {
    //console.log('FormCadastro render props: ', this.props)

    return (
      <View style={{ padding: 10 }}>
        <Text>Nome:</Text>
        <Field name="nome" component={MyTextInput} />
        <Text>Email:</Text>
        <Field name="email" component={MyTextInput} />
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Button title='Salvar' onPress={this.props.handleSubmit(this.props.salvar)} />
          <Button title='Alterar' onPress={() => this.alterar()} />
          <Button title='Cancelar' onPress={this.props.init} />
        </View>
      </View>
    )
  }
}

FormCadastro = reduxForm({
  form: 'formCadastro'
})(FormCadastro)
/*neste caso o selector não é necessário*/
/*const selector = formValueSelector('formCadastro')*/
const mapStateToProps = state => ({
})
const mapDispatchToProps = dispatch => bindActionCreators({
  init, salvar, alterar
}, dispatch)
export default connect(mapStateToProps,mapDispatchToProps)(FormCadastro)
