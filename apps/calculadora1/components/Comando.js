import React from 'react';
import { View, Button } from 'react-native';

export default (props) => (
    <View style={{ padding: 10 }}>
        <Button title='Calcular' onPress={props.callback} color='blue' />
    </View>
);
