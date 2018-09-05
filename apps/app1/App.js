/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

type Props = {};
export default class App extends Component<Props> {

  gerarNumero() {
    let numero = Math.floor(Math.random() * 10);
    alert(numero);
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title='Gerar número' onPress={this.gerarNumero}/>
        <Text style={styles.instructions}>
          Meu primeiro App!
        </Text>
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
  instructions: {
    color: '#000'
  },
});