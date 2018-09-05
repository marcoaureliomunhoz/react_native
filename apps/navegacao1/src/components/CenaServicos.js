import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import BarraNavegacao from './BarraNavegacao';
import ImgDetalheServico from '../../imgs/detalhe_servico.png';

export default class CenaServicos extends Component {
  render() {
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <BarraNavegacao 
                titulo='ATM Consultoria' 
                cor='#19d1c8' 
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
                        source={ImgDetalheServico} 
                        style={{ marginRight: 10, width: 50, height: 50 }} 
                    />
                    <Text 
                        style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}
                    >Nossos Serviços</Text>
                </View>
                <View style={{ paddingHorizontal: 10 }}>
                    <Text>- Consultoria</Text>
                    <Text>- Processos</Text>
                    <Text>- Blá blá blá</Text>
                </View>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    
});
