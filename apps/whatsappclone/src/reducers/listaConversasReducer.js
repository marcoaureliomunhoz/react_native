import * as Constants from '../typesActions/listaConversasTypes'

const INITIAL_STATE = {
    mensagens: [], 
    conversas: []
}

export default (state = INITIAL_STATE, action) => {
    console.log('listaConversasReducer: ', action)
    
    switch (action.type) {
        case Constants.LISTA_MENSAGENS_OK: 
            return { ...state, mensagens: action.payload }
        case Constants.LISTA_CONVERSAS_OK: 
            return { ...state, conversas: action.payload }
        default: 
            return state
    }
}
