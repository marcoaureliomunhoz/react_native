import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';

export default class Operacao extends Component { 
    
    constructor(props) {
        super(props);

        this.state = {
            operacao: ''
        };
    }

    mudarEstado(value) {
        this.setState({
            operacao: value
        });
    }

    render() { 
        return (
            <View style={{ padding: 10 }}>
                <Picker 
                    selectedValue={this.state.operacao} 
                    onValueChange={(value) => {
                            this.mudarEstado(value);
                            this.props.callback(value);
                        }
                    }
                >
                    <Picker.Item label='Soma' value='+' />
                    <Picker.Item label='Subtração' value='-' />
                    <Picker.Item label='Multiplicação' value='*' />
                    <Picker.Item label='Divisão' value='/' />
                </Picker>
            </View>
        );
    }
}
