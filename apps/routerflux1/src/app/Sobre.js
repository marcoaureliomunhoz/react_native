import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Styles from './Styles';

export default class Sobre extends Component {

    render() {
        return (
            <View style={Styles.viewBack}>
                <Text>
                    Aqui vamos falar sobre o jogo...
                </Text>
            </View>
        );
    }
}
