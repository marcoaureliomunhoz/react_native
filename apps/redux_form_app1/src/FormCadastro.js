import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import { Field, reduxForm } from 'redux-form'

const submit = values => {
  console.log('submitting form', values)
}

const renderInput = ({ input: { onChange, ...restInput }}) => {
  return <TextInput style={styles.input} onChangeText={onChange} {...restInput} />
}

class FormCadastro extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Email:</Text>
        <Field name="email" component={renderInput} />
        <TouchableOpacity onPress={this.props.handleSubmit(submit)}>
          <Text style={styles.button}>Submit</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default reduxForm({
  form: 'formCadastro'
})(FormCadastro)

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    color: 'white',
    height: 30,
    lineHeight: 30,
    marginTop: 10,
    textAlign: 'center'
  },
  container: {
    padding: 10
  },
  input: {
    height: 37
  }
})
