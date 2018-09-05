import * as Constants from '../typesActions/appTypes'

const INITIAL_STATE = {
    email: '',
    erroCadastro: '',    
    statusForm: 1, 
    mensagem: ''
}

export default (state = INITIAL_STATE, action) => {
    //console.log('state: ', state)
    console.log('appReducer - action: ', action)
    
    if (action.type === Constants.APP_CHANGE_KEY) {
        const fragment = {}
        fragment[action.payload.key] = action.payload.value
        return { ...state, ...fragment }
    }

    if (action.type === Constants.APP_SET_ERROR) {
        return { ...state, erroCadastro: action.payload, statusForm: 1 }
    }

    if (action.type === Constants.APP_STATUS_FORM) {
        return { ...state, statusForm: action.payload }
    }

    if (action.type === Constants.APP_ADD_CONTATO_OK) {
        return { ...state, statusForm: 1, erroCadastro: '', email: '' }
    }

    if (action.type === Constants.APP_ADD_CONTATO_NOK) {
        return { ...state, statusForm: 1, erroCadastro: action.payload }
    }

    if (action.type === Constants.APP_CHANGE_MESSAGE) {
        return { ...state, mensagem: action.payload }
    }

    if (action.type === Constants.APP_MESSAGE_SEND_OK || action.type === Constants.APP_MESSAGE_SET_OK) {
        return { ...state, mensagem: '' }
    }
    
    return state
}
