import React from 'react';
import { View, TextInput } from 'react-native';

export default (props) => (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
        <TextInput 
            style={{ flex: 1, textAlign: 'center' }} 
            value={props.valor1} 
            keyboardType='numeric'
            onChangeText={(value) => props.aoMudarValor1(value)}
        />
        <TextInput 
            style={{ flex: 1, textAlign: 'center' }} 
            value={props.valor2} 
            keyboardType='numeric'
            onChangeText={(value) => props.aoMudarValor2(value)}
        />
    </View>
);
