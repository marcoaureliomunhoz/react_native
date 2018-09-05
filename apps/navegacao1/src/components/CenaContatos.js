import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import BarraNavegacao from './BarraNavegacao';
import ImgDetalheContato from '../../imgs/detalhe_contato.png';

export default class CenaContatos extends Component {
  render() {
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <BarraNavegacao 
                titulo='ATM Consultoria' 
                cor='#61bd8c' 
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
                        source={ImgDetalheContato} 
                        style={{ marginRight: 10, width: 50, height: 50 }} 
                    />
                    <Text 
                        style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}
                    >Contatos</Text>
                </View>
                <View style={{ paddingHorizontal: 10 }}>
                    <Text>Tel: (18) 1234-5678</Text>
                </View>
                <View style={{ paddingHorizontal: 10 }}>
                    <Text>Cel: (18) 1234-5678</Text>
                </View>
                <View style={{ paddingHorizontal: 10 }}>
                    <Text>Email: marcoaureliomunhoz@gmail.com</Text>
                </View>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    
});
