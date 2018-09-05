import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TabBar } from 'react-native-tab-view'
import { Actions } from 'react-native-router-flux'

import firebase from '@firebase/app'
import '@firebase/auth'

import { 
    MyTouchableOpacity, MyTouchableOpacityImage
} from '../components/shared/Buttons'
import ImgAdicionarContato from '../assets/img/adicionar_contato.png'

export default class FormPrincipalTabBar extends Component {
    sair() {
        firebase
            .auth()
            .signOut()
            .then(() => Actions.login())
    }
    
    render() {
        return (
            <View style={styles.barra}>
              <View style={styles.menu}>
                <Text style={styles.titulo}>
                    WhatsApp Clone
                </Text>
                <View style={styles.opcoes}> 
                    <MyTouchableOpacityImage 
                        style={{ marginHorizontal: 10 }}
                        source={ImgAdicionarContato} 
                        onPress={() => Actions.cadContato()}
                    />
                    <MyTouchableOpacity 
                        title='Sair' 
                        textColor='white' 
                        textStyle={{ fontSize: 17 }}
                        onPress={() => this.sair()}
                    />
                </View>
              </View>
              <TabBar
                {...this.props}
                style={{ backgroundColor: '#115e54', elevation: 0 }}
                indicatorStyle={{ backgroundColor: 'white' }}
              />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    barra: { 
        backgroundColor: '#115e54', 
        elevation: 4, 
        marginBottom: 2                    
    }, 
    menu: { 
        padding: 15, 
        flexDirection: 'row', 
        justifyContent: 'space-between'
    },
    titulo: { 
        fontSize: 20, 
        color: 'white', 
        fontWeight: 'bold' 
    },
    opcoes: { 
        flexDirection: 'row', 
        alignItems: 'center' 
    }
})
