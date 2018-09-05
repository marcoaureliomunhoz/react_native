import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View, 
  StatusBar,
  TouchableOpacity, Image
} from 'react-native';
import ImgVoltar from '../../imgs/btn_voltar.png';

export default class BarraNavegacao extends Component {
  render() {
    const { navigator } = this.props;
    return (
      <View style={{ marginBottom: 5 }}>
        <StatusBar backgroundColor={this.props.cor} />
        <View 
            style={{ 
                backgroundColor: this.props.cor, 
                height: 60, 
                flexDirection: 'row',
                alignItems: 'center' 
            }}
        >
            {this.props.voltar ? 
                <TouchableOpacity 
                    style={{ paddingHorizontal: 10 }}
                    onPress={() => navigator.pop()}
                >
                    <Image source={ImgVoltar} />
                </TouchableOpacity> 
                : false}
            <Text 
                style={ 
                    this.props.voltar ? styles.textoTituloLeft : styles.textoTitulo
                }
            >{this.props.titulo}</Text>
        </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
    barraTitulo: {
        height: 60, 
        alignItems: 'center'
    },
    textoTitulo: {
        flex: 1,
        fontSize: 18,
        color: 'black',
        textAlignVertical: 'center', 
        textAlign: 'center'
    }, 
    textoTituloLeft: {
        flex: 1,
        fontSize: 18,
        color: 'black',
        textAlignVertical: 'center'
    }
});
