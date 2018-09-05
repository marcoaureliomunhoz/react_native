import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Styles from './Styles';
import ImgLogo from '../assets/img/logo.png';
import ImgBotaoJogar from '../assets/img/botao_jogar.png';
import ImgSobreJogo from '../assets/img/sobre_jogo.png';
import ImgOutrosJogos from '../assets/img/outros_jogos.png';

export default class Home extends Component {

    render() {
        return (
            <View style={Styles.viewBack}>
                <View 
                    style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
                >
                    <Image 
                        source={ImgLogo} 
                        style={{ marginBottom: 50, width: 280, height: 130 }} 
                        resizeMode='stretch' 
                    />
                    <TouchableOpacity onPress={() => Actions.resultado()}>
                        <Image
                            source={ImgBotaoJogar} 
                            style={{ width: 200, height: 60 }} 
                            resizeMode='stretch' 
                        />
                    </TouchableOpacity>
                </View>
                <View style={{ padding: 5, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TouchableOpacity onPress={() => Actions.sobre()}><Image source={ImgSobreJogo} /></TouchableOpacity>
                    <TouchableOpacity onPress={() => Actions.outrosJogos()}><Image source={ImgOutrosJogos} /></TouchableOpacity>
                </View>
            </View>
        );
    }
}
