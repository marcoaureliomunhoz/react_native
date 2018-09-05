import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Entrada from './Entrada';
import Operacao from './Operacao';
import Comando from './Comando';

class Painel extends Component {

    constructor(props) {
        super(props);

        this.state = {
            num1: '0',
            num2: '0', 
            operacao: '+'
        };

        this.aoMudarValor2 = this.aoMudarValor2.bind(this);
    }

    calcular() {
        const num1 = parseInt(this.state.num1);
        const num2 = parseInt(this.state.num2);
        console.log('calculando...', num1, this.state.operacao, num2);
        let resultado = 0;
        if (this.state.operacao === '-') {
            resultado = num1 - num2;
        } else if (this.state.operacao === '*') {
            resultado = num1 * num2;
        } else if (this.state.operacao === '/') {
            resultado = num1 / num2;
        } else {
            resultado = num1 + num2;
        }
        this.props.aoCalcular(resultado);
    }

    aoMudarValor1(novoValor) {
        //console.log('aoMudarValor1', novoValor);
        /*this.setState({ 
            ...this.state,
            num1: novoValor
        });*/
        this.setState({ 
            num1: novoValor
        });
    }

    aoMudarValor2(novoValor) {
        //console.log('aoMudarValor2', novoValor);
        /*this.setState({ 
            ...this.state,
            num2: novoValor
        });*/
        this.setState({ 
            num2: novoValor
        });
    }

    novaOperacao(operacao) {
        this.setState({
            operacao
        });
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Entrada 
                    valor1={this.state.num1} 
                    aoMudarValor1={(valor) => this.aoMudarValor1(valor)}
                    valor2={this.state.num2} 
                    aoMudarValor2={this.aoMudarValor2}
                />
                <Operacao 
                    callback={(operacao) => this.novaOperacao(operacao)} 
                />
                <Comando callback={() => this.calcular()} />
            </View>
        );
    }
}

export { Painel };
