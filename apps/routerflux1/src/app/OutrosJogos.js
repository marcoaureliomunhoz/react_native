import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Styles from './Styles';

export default class OutrosJogos extends Component {

    render() {
        return (
            <View style={Styles.viewBack}>
                <Text>
                    Aqui temos outros jogos...
                </Text>
            </View>
        );
    }
}
