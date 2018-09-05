import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Styles from './Styles';
import ImgMoedaCara from '../assets/img/moeda_cara.png';
import ImgMoedaCoroa from '../assets/img/moeda_coroa.png';

export default class Resultado extends Component {

    renderMoeda() {
        const numero = Math.floor((Math.random() * 10));
        if (numero < 5) {
            return <Image source={ImgMoedaCara} style={localStyles.moeda} />;
        } 
        return <Image source={ImgMoedaCoroa} style={localStyles.moeda} />;
    }

    render() {
        return (
            <View style={Styles.viewBack}>
                <View 
                    style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
                >
                    {this.renderMoeda()}
                </View>
            </View>
        );
    }
}

const localStyles = StyleSheet.create({
    moeda: {
        width: 200,
        height: 200
    }
});
