import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Topo = () => (
    <View style={{ backgroundColor: 'blue' }} >
        <Text style={styles.titulo} >Calculadora</Text>
    </View>
);

const styles = StyleSheet.create({
    titulo: {
        padding: 10, 
        color: 'white', 
        fontSize: 20, 
        textAlign: 'center'
    }
});

export { Topo };
