import React, { Component } from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import BarraNavegacao from './BarraNavegacao';
import ImgLogo from '../../imgs/logo.png';
import ImgMenuCliente from '../../imgs/menu_cliente.png';
import ImgMenuContato from '../../imgs/menu_contato.png';
import ImgMenuEmpresa from '../../imgs/menu_empresa.png';
import ImgMenuServico from '../../imgs/menu_servico.png';

export default class CenaPrincipal extends Component {
  render() {
    const { navigator } = this.props;
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <BarraNavegacao titulo='ATM Consultoria' cor='#ccc' />
            <View style={{ alignItems: 'center' }}>
                <View>
                    <Image source={ImgLogo} />
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity 
                        style={styles.botao} 
                        onPress={() => navigator.push({ id: 'clientes' })}
                    >
                        <Image source={ImgMenuCliente} />
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.botao}
                        onPress={() => navigator.push({ id: 'contatos' })}
                    >
                        <Image source={ImgMenuContato} />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity 
                        style={styles.botao}
                        onPress={() => navigator.push({ id: 'empresa' })}
                    >
                        <Image source={ImgMenuEmpresa} />
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.botao}
                        onPress={() => navigator.push({ id: 'servicos' })}
                    >
                        <Image source={ImgMenuServico} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    botao: {
        padding: 15
    }
});
