import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Topo from './components/Topo';
import Icone from './components/Icone';

export default class App extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      escolhaUsuario: '', 
      escolhaComputador: '', 
      resultado: ''
    };
  }

  acaoUsuario(escolhaUsuario) {
    let escolhaComputador = 'tesoura';
    const numero = Math.floor(Math.random() * 15);
    if (numero >= 0 && numero < 5) {
      escolhaComputador = 'pedra';
    } else if (numero >= 5 && numero < 10) {
      escolhaComputador = 'papel';
    }

    let resultado = '';
    if (escolhaUsuario === 'pedra') {
      if (escolhaComputador === 'pedra') {
        resultado = 'Empate';
      } else if (escolhaComputador === 'papel') {
        resultado = 'Computador venceu';
      } else {
        resultado = 'Usuário venceu';
      }
    } else if (escolhaUsuario === 'papel') {
      if (escolhaComputador === 'papel') {
        resultado = 'Empate';
      } else if (escolhaComputador === 'tesoura') {
        resultado = 'Computador venceu';
      } else {
        resultado = 'Usuário venceu';
      }
    } else if (escolhaUsuario === 'tesoura') {
      if (escolhaComputador === 'tesoura') {
        resultado = 'Empate';
      } else if (escolhaComputador === 'pedra') {
        resultado = 'Computador venceu';
      } else {
        resultado = 'Usuário venceu';
      }
    }

    this.setState({
      escolhaUsuario, 
      escolhaComputador, 
      resultado
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Topo />
        <View style={styles.painelAcoes}>
          <View style={styles.vbotao}>
            <Button title="Pedra" onPress={() => this.acaoUsuario('pedra')} />
          </View>
          <View style={styles.vbotao}>
            <Button title="Papel" onPress={() => this.acaoUsuario('papel')} />
          </View>
          <View style={styles.vbotao}>
            <Button title="Tesoura" onPress={() => this.acaoUsuario('tesoura')} />
          </View>
        </View>
        <View style={styles.resultado}>
          <Icone jogador='Usuário' escolha={this.state.escolhaUsuario} />
          <Icone jogador='Computador' escolha={this.state.escolhaComputador} />

          <View style={{ alignItems: 'center', marginBottom: 5, marginTop: 5 }}>
            <Text style={{ textAlign: 'center' }}>Resultado</Text>
            <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 20, color: 'green' }}>
            { this.state.resultado }
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  painelAcoes: {
    backgroundColor: '#f5f5f5',
    flexDirection: 'row',
    alignItems: 'center', 
    justifyContent: 'space-evenly',
    padding: 10
  },
  vbotao: {
    width: 90
  }, 
  resultado: {
    alignItems: 'center',
    paddingTop: 20
  }
});
