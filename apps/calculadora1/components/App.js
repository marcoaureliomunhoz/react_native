import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import { Topo, Resultado, Painel } from './_index';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      resultado: ''
    };
  }

  aoCalcular(resultado) {
    this.setState({
      resultado: resultado.toFixed()
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Topo />
        <Resultado valor={this.state.resultado} />
        <Painel aoCalcular={(resultado) => this.aoCalcular(resultado)} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 3
  }
});
