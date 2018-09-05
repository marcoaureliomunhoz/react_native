import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import BarraNavegacao from './BarraNavegacao';
import ImgDetalheEmpresa from '../../imgs/detalhe_empresa.png';

export default class CenaEmpresa extends Component {
  render() {
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <BarraNavegacao 
                titulo='ATM Consultoria' 
                cor='#ec7148' 
                navigator={this.props.navigator} 
                voltar
            />
            <View>
                <View 
                    style={{ 
                        flexDirection: 'row', 
                        alignItems: 'center', 
                        padding: 10, 
                        backgroundColor: 'white', 
                        marginBottom: 10
                    }}
                >
                    <Image 
                        source={ImgDetalheEmpresa} 
                        style={{ marginRight: 10, width: 50, height: 50 }} 
                    />
                    <Text 
                        style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}
                    >Empresa</Text>
                </View>
                <View style={{ paddingHorizontal: 10 }}>
                    <Text>Desde 1900 e bolinha estamos aqui fazendo nada...</Text>
                </View>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    
});
