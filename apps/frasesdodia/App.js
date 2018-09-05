/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View, Text, Image,
  TouchableOpacity, 
  Alert
} from 'react-native';
import logo from './imgs/logo.png';

export default class App extends Component {

  gerarNovaFrase() {
    const numero = Math.floor(Math.random() * 5);
    const frases = [
      'frase1', 
      'frase2', 
      'frase3', 
      'frase4', 
      'frase5',
      'frase6'
    ];
    Alert.alert(frases[numero]);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={logo} />
        <TouchableOpacity 
          onPress={this.gerarNovaFrase}
          style={styles.btn}>
          <Text style={styles.btnText}>Nova Frase</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  btn: {
    backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginTop: 10
  },
  btnText: {
    color: 'white',
    fontWeight: 'bold'
  }
});
