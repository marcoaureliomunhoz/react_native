import React, { Component } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import ImgPedra from '../../imgs/pedra.png';
import ImgPapel from '../../imgs/papel.png';
import ImgTesoura from '../../imgs/tesoura.png';

export default class Icone extends Component {
    imagem(escolha) {
        if (escolha === 'pedra') {
            return (
                <Image source={ImgPedra} />
            );
        } else if (escolha === 'papel') {
            return (
                <Image source={ImgPapel} />
            );
        } else if (escolha === 'tesoura') {
            return (
                <Image source={ImgTesoura} />
            );
        }
        return false;
    }

    render() {
        return (
            <View style={styles.icone}>
                <Text style={{ textAlign: 'center' }}>{this.props.jogador}</Text>                
                {this.imagem(this.props.escolha)}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    icone: {
        marginBottom: 5, 
        marginTop: 5, 
        alignItems: 'center'
    }
  });
