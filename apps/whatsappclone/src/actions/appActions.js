import { Alert } from 'react-native'
import { Actions } from 'react-native-router-flux'
import firebase from '@firebase/app'
import '@firebase/auth'
import '@firebase/database'
import base64 from 'base-64'
import _ from 'lodash'
import * as Constants from '../typesActions/appTypes'
import * as ListaContatosConst from '../typesActions/listaContatosTypes'
import * as ListaConversasConst from '../typesActions/listaConversasTypes'

export function onChangeValue(key, value) {
    return {
        type: `APP_CHANGE_${key}`,
        payload: value
    }
}

export function onChangeKey(key, value) {
    return {
        type: Constants.APP_CHANGE_KEY,
        payload: {
            key,
            value
        }
    }
}

export function setError(error) {
    return {
        type: Constants.APP_SET_ERROR,
        payload: error
    }
}

export function setStatusForm(status) {
    return {
        type: Constants.APP_STATUS_FORM,
        payload: status
    }
}

export function adicionarContato(email) {
    console.log('appActions adicionarContato')

    if (!email) {
        return {
            type: Constants.APP_ADD_CONTATO_NOK, 
            payload: 'Informe um e-mail!'
        }
    }

    const { currentUser } = firebase.auth()
    if (currentUser && currentUser.email) {
        if (currentUser.email === email) {
            return {
                type: Constants.APP_ADD_CONTATO_NOK, 
                payload: 'E-mail inválido!'
            }
        }
    }

    return (dispatch) => {
        const emailEmBase64 = base64.encode(email)
        firebase.database().ref(`/contatos/${emailEmBase64}`)
            .once('value')
            .then(snapshot => {                
                console.log(snapshot.val())
                if (snapshot.val()) {
                    const dadosUsuario = _.values(snapshot.val())
                    console.log(dadosUsuario)
                    const emailCurrentUserEmBase64 = base64.encode(currentUser.email)
                    firebase.database().ref(`/usuario_contatos/${emailCurrentUserEmBase64}`)
                        .push({ email, nome: dadosUsuario[0].nome })
                        .then(response => {
                            console.log(response)
                            dispatch({
                                type: Constants.APP_ADD_CONTATO_OK, 
                                payload: ''
                            })
                            Actions.principal()
                        })
                        .catch(error => {
                            console.log(error)
                            dispatch({
                                type: Constants.APP_ADD_CONTATO_NOK, 
                                payload: 'Falha ao adicionar contato.'
                            })
                        })                    
                } else {
                    dispatch({
                        type: Constants.APP_ADD_CONTATO_NOK, 
                        payload: 'Este e-mail não é um contato válido.'
                    })
                }
            })
            .catch(error => {
                console.log(error)
                dispatch({
                    type: Constants.APP_ADD_CONTATO_NOK, 
                    payload: 'Falha ao consultar contato.'
                })                
            })
    }
}

export function contatosUsuarioFetch() {
    console.log('appActions contatosUsuarioFetch')

    const { currentUser } = firebase.auth()
    const emailCurrentUserEmBase64 = base64.encode(currentUser.email)

    return (dispatch) => {
        firebase.database().ref(`/usuario_contatos/${emailCurrentUserEmBase64}`)
            .on('value', snapshot => {
                console.log(snapshot)
                dispatch({
                    type: ListaContatosConst.LISTA_CONTATOS_OK, 
                    payload: _.map(snapshot.val(), (val, uid) => ({ ...val, uid }))
                })
            })
    }
}

export function onChangeMessage(message) {
    return {
        type: Constants.APP_CHANGE_MESSAGE, 
        payload: message
    }
}

export function enviaMensagem(mensagem, contatoNome, contatoEmail) {
    const { currentUser } = firebase.auth()
    const emailCurrentUserEmBase64 = base64.encode(currentUser.email)
    const contatoEmailEmBase64 = base64.encode(contatoEmail) 

    return dispatch => {
        firebase.database()
            .ref(`/mensagens/${emailCurrentUserEmBase64}/${contatoEmailEmBase64}`)
            .push({ mensagem, tipo: 'e' })
            .then(() => {
                firebase.database()
                    .ref(`/mensagens/${contatoEmailEmBase64}/${emailCurrentUserEmBase64}`)
                    .push({ mensagem, tipo: 'r' })
                    .then(() => {
                        dispatch({
                            type: Constants.APP_MESSAGE_SEND_OK, 
                            payload: ''
                        })
                    })
                    .catch(error => {
                        dispatch({
                            type: Constants.APP_MESSAGE_SEND_ERROR2, 
                            payload: error
                        })
                    })
            })
            .then(() => {
                firebase.database()
                    .ref(`/usuario_conversas/${emailCurrentUserEmBase64}/${contatoEmailEmBase64}`)
                    .set({ nome: contatoNome, email: contatoEmail })
                    .then(() => {
                        firebase.database()
                            .ref(`/contatos/${emailCurrentUserEmBase64}`)
                            .once('value')
                            .then(snapshot => {
                                const usuario = _.first(_.values(snapshot.val()))
                                firebase.database()
                                    .ref(`/usuario_conversas/${contatoEmailEmBase64}/${emailCurrentUserEmBase64}`)
                                    .set({ nome: usuario.nome, email: currentUser.email })
                                    .then(() => {
                                        dispatch({
                                            type: Constants.APP_MESSAGE_SET_OK, 
                                            payload: ''
                                        })
                                    })
                                    .catch(error => {
                                        dispatch({
                                            type: Constants.APP_MESSAGE_SET_ERROR2, 
                                            payload: error
                                        })
                                    })
                            })
                            .catch(error => {
                                dispatch({
                                    type: Constants.APP_MESSAGE_SET_ERROR2, 
                                    payload: error
                                })
                            })
                    })
                    .catch(error => {
                        dispatch({
                            type: Constants.APP_MESSAGE_SET_ERROR1, 
                            payload: error
                        })
                    })
            })
            .catch(error => {
                dispatch({
                    type: Constants.APP_MESSAGE_SEND_ERROR1, 
                    payload: error
                })
            })
    }
}

export function conversaUsuarioFetch(contatoEmail) {
    const { currentUser } = firebase.auth()
    const emailCurrentUserEmBase64 = base64.encode(currentUser.email)
    const contatoEmailEmBase64 = base64.encode(contatoEmail) 

    return dispatch => {
        firebase.database()
            .ref(`/mensagens/${emailCurrentUserEmBase64}/${contatoEmailEmBase64}`)
            .on('value', snapshot => {
                /*console.log(snapshot.val())*/
                dispatch({
                    type: ListaConversasConst.LISTA_MENSAGENS_OK,
                    payload: _.map(snapshot.val(), (val, uid) => ({ ...val, uid }))
                })
            })
    }
}

export function conversasUsuarioFetch() {
    console.log('appActions conversasUsuarioFetch')

    const { currentUser } = firebase.auth()
    const emailCurrentUserEmBase64 = base64.encode(currentUser.email)

    return (dispatch) => {
        firebase.database().ref(`/usuario_conversas/${emailCurrentUserEmBase64}`)
            .on('value', snapshot => {
                console.log(snapshot)
                dispatch({
                    type: ListaConversasConst.LISTA_CONVERSAS_OK, 
                    payload: _.map(snapshot.val(), (val, uid) => ({ ...val, uid }))
                })
            })
    }
}
