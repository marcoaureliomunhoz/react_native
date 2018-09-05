import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const Resultado = (props) => (
    <View>
        <TextInput 
            style={styles.valor} 
            placeholder='Resultado' 
            editable={false}
            value={props.valor}            
        />
    </View>
);

const styles = StyleSheet.create({
    valor: {
        padding: 25, 
        color: 'black', 
        fontSize: 20, 
        fontWeight: 'bold',
        textAlign: 'center'
    }
});

export { Resultado };
