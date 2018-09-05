import { Alert, AsyncStorage } from 'react-native'
import { Actions } from 'react-native-router-flux'
import firebase from '@firebase/app'
import '@firebase/auth'
import '@firebase/database'
import base64 from 'base-64'
import * as Constants from '../typesActions/autenticacaoTypes'

export function onChangeValue(key, value) {
    return {
        type: `CHANGE_${key}`,
        payload: value
    }
}

export function onChangeKey(key, value) {
    return {
        type: Constants.CHANGE_KEY,
        payload: {
            key,
            value
        }
    }
}

export function setError(error) {
    return {
        type: Constants.SET_ERROR,
        payload: error
    }
}

export function btnSalvarClick({ nome, email, senha }) {
    //console.log('btnSalvarClick: ', email, senha)
    return (dispatch) => {
        dispatch(setStatusForm(0))
        firebase.auth().createUserWithEmailAndPassword(email, senha)
            .then(response => {
                dispatch(registrarUsuario(nome, email))
                dispatch(cadastroSucesso(response))
            })
            .catch(response => dispatch(cadastroFalhou(response)))
    }
}

export function setStatusForm(status) {
    return {
        type: Constants.STATUS_FORM,
        payload: status
    }
}

const armazenarCredenciais1 = async (email, senha) => {
    console.log('armazenarCredenciais')
    try {
        const credenciais = { email, senha }
        const value = JSON.stringify(credenciais)
        console.log('armazenarCredenciais value: ', value)
        await AsyncStorage.setItem('@whatsappclone:credenciais', value)
    } catch (error) {
        console.log('armazenarCredenciais erro: ', error)
    }
}

const armazenarCredenciais = (email, senha) => {
    console.log('armazenarCredenciais')
    try {
        const credenciais = { email, senha }
        const value = JSON.stringify(credenciais)
        console.log('armazenarCredenciais value: ', value)
        AsyncStorage.setItem(
            '@whatsappclone:credenciais', 
            value, 
            (error) => {
                console.log('armazenarCredenciais erro: ', error)
            }
        )
    } catch (error) {
        console.log('armazenarCredenciais erro geral: ', error)
    }
}

export function carregarCredenciais1() {
    console.log('carregarCredenciais')
    return (dispatch) => {
        AsyncStorage.getItem('@whatsappclone:credenciais')
            .then(value => {
                console.log('carregarCredenciais value: ', value)
                if (value !== null) {
                    const credenciais = JSON.parse(value)
                    dispatch({
                        type: Constants.SET_CREDENTIALS,
                        payload: credenciais
                    })
                }
            })
            .catch(error => {
                console.log('carregarCredenciais erro: ', error)
            })
    }
}

export function carregarCredenciais() {
    console.log('carregarCredenciais')
    return (dispatch) => {
        AsyncStorage.getItem('@whatsappclone:credenciais', 
            (error, result) => {
                console.log('carregarCredenciais error: ', error)
                console.log('carregarCredenciais result: ', result)
                let credenciais = null
                if (result != null) {
                    credenciais = JSON.parse(result)
                } 
                dispatch({
                    type: Constants.SET_CREDENTIALS,
                    payload: credenciais
                })
            })
    }
}

export function autenticarUsuario(email, senha) {
    return (dispatch) => {
        firebase.auth().signInWithEmailAndPassword(email, senha)
            .then(response => {
                console.log('autenticarUsuario ok: ', response)
                dispatch({ 
                    type: Constants.ACCESS_VALUE, 
                    payload: {
                        value: true,
                        error: ''
                    }
                })
                armazenarCredenciais(email, senha)
                Actions.principal()
            })
            .catch(response => {
                console.log('autenticarUsuario nok: ', response)
                dispatch({ 
                    type: Constants.ACCESS_VALUE, 
                    payload: {
                        value: false,
                        error: response.code
                    }
                })
            })
    }
}

function registrarUsuario(nome, email) {
    return (dispatch) => {
        const emailEmBase64 = base64.encode(email)
        firebase.database().ref(`/contatos/${emailEmBase64}`)
            .push({ nome })
            .then(response => {
                /*firebase.database().goOffline()*/
                console.log('firebase database ok: ', response)
                dispatch({
                    type: Constants.REGISTER_USER_SUCCESS, 
                    payload: emailEmBase64
                })
            })
            .catch(response => {
                /*firebase.database().goOffline()*/
                console.log('firebase database nok: ', response)
                dispatch({
                    type: Constants.REGISTER_USER_ERROR
                })
            }) 
    }
}

function cadastroSucesso(usuario) {
    Alert.alert('Parabéns', 'Cadastro realizado com sucesso!')
    Actions.login()
    return {
        type: Constants.SAVE_SUCCESS, 
        payload: usuario
    }
}

function traduzirErro(erro) {
    if (erro === 'auth/invalid-email') {
        return 'E-mail inválido!'
    }    
    return erro
}

function cadastroFalhou(falha) {
    Alert.alert('Atenção', 'O cadastro falhou!')
    console.log(falha)
    return {
        type: Constants.SAVE_ERROR,
        payload: traduzirErro(falha.code)
    }
}
