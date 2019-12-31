/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';

const instructions = Platform.select({
  ios: 
    'Pressione Cmd+R para recarregar.\n' + 
    'No dispositivo real use Cmd+D ou chacoalhe para exibir o menu dev.',
  android:
    'Pressione duas vezes R para recarregar.\n' +
    'No dispositivo real chacoalhe ou pressione o botão menu para exibir o menu dev',
});

type Props = {};
export default class App extends Component<Props> {

  constructor(props) {
    super(props);

    this.exibirMensagem = this.exibirMensagem.bind(this);
  }

  exibirMensagem() {
    alert('Isso é um teste!');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Teste</Text>
        <Button title='Clique aqui!' onPress={this.exibirMensagem}></Button>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#000',
    marginBottom: 20
  },
  instructions: {
    textAlign: 'center',
    color: '#f00',
    marginBottom: 5,
    marginTop: 20
  },
});
