import * as Constants from '../typesActions/autenticacaoTypes'

const INITIAL_STATE = {
    nome: '',
    email: '',
    senha: '',
    erroCadastro: '',
    erroLogin: '',
    usuario: null,
    statusForm: 1, 
    acesso: false
}

export default (state = INITIAL_STATE, action) => {
    //console.log('state: ', state)
    //console.log('autenticacaoReducer - action: ', action)
    
    if (action.type === 'CHANGE_EMAIL') {
        return { ...state, email: action.payload }
    }
    
    if (action.type === Constants.CHANGE_KEY) {
        const fragment = {}
        fragment[action.payload.key] = action.payload.value
        return { ...state, ...fragment }
    }

    if (action.type === Constants.SAVE_SUCCESS) {
        return { ...state, usuario: action.payload, statusForm: 1 }
    }

    if (action.type === Constants.SAVE_ERROR || action.type === Constants.SET_ERROR) {
        return { ...state, erroCadastro: action.payload, statusForm: 1 }
    }

    if (action.type === Constants.STATUS_FORM) {
        return { ...state, statusForm: action.payload }
    }

    if (action.type === Constants.ACCESS_VALUE) {
        return { 
            ...state, 
            acesso: action.payload.value, 
            erroLogin: action.payload.error,
            statusForm: 1 
        }
    }

    if (action.type === Constants.SET_CREDENTIALS) {
        if (action.payload !== null) {
            return { 
                ...state, 
                email: action.payload.email, 
                senha: action.payload.senha
            }
        }
    }

    return state
}
