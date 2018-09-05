import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

export default class Item extends Component {

    render() {
        return (
            <View style={{ flexDirection: 'row', marginBottom: 5, backgroundColor: '#fff' }}>
                <View style={{ padding: 5 }}>
                    <Image 
                        source={{ uri: this.props.valores.foto }} 
                        style={{ width: 50, height: 50 }}
                    />
                </View>
                <View style={{ padding: 5 }}>
                    <Text style={{ fontWeight: 'bold', color: 'black' }}>
                        {this.props.valores.titulo}
                    </Text>
                    <Text style={{ color: 'blue' }}>
                        R$ {this.props.valores.valor.toFixed(2).replace('.', ',')}
                    </Text>
                    <Text style={{ color: 'gray', fontSize: 10 }}>
                        {this.props.valores.local_anuncio} | {this.props.valores.data_publicacao}
                    </Text>
                </View>
            </View>
        );
    }
}
