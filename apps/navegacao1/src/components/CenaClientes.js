import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import BarraNavegacao from './BarraNavegacao';
import ImgDetalheCliente from '../../imgs/detalhe_cliente.png';
import ImgCliente1 from '../../imgs/cliente1.png';
import ImgCliente2 from '../../imgs/cliente2.png';

export default class CenaClientes extends Component {
  render() {
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <BarraNavegacao 
                titulo='ATM Consultoria' 
                cor='#b9c941' 
                navigator={this.props.navigator} 
                voltar
            />
            <View>
                <View 
                    style={{ flexDirection: 'row', alignItems: 'center', padding: 10, backgroundColor: 'white' }}>
                    <Image 
                        source={ImgDetalheCliente} 
                        style={{ marginRight: 10, width: 50, height: 50 }} 
                    />
                    <Text 
                        style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}
                    >Nossos Clientes</Text>
                </View>
                <View style={{ padding: 10 }}>
                    <Image source={ImgCliente1} />
                    <Text>Sys é nosso cliente desde 01/01/2000...</Text>
                </View>
                <View style={{ padding: 10 }}>
                    <Image source={ImgCliente2} />
                    <Text>Rsm é nosso cliente desde 01/01/2000...</Text>
                </View>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    
});
