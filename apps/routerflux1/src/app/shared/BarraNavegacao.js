import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class BarraNavegacao extends Component {

    render() {
        return (
            <View 
                style={[
                    { backgroundColor: this.props.corFundo ? this.props.corFundo : 'gray' },
                    { height: 50, flexDirection: 'row', alignContent: 'center', alignItems: 'center' }
                ]}
            >
                {this.props.voltar ?
                    <TouchableOpacity 
                        style={{ width: 30, height: 30 }}
                    > 
                        <Text 
                            style={{ 
                                fontWeight: '700', 
                                fontSize: 20, 
                                color: this.props.corTitulo ? this.props.corTitulo : 'white', 
                                textAlign: 'center' 
                            }}
                        >&lt;</Text>
                    </TouchableOpacity>
                : false }
                <Text 
                    style={[
                        { color: this.props.corTitulo ? this.props.corTitulo : 'white' },
                        { flex: 1, fontWeight: 'bold' },
                        { textAlign: this.props.voltar ? 'left' : 'center' }
                    ]}
                >{this.props.titulo}</Text>
            </View>
        );
    }
}
