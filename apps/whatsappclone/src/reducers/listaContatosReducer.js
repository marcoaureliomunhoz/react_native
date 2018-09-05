import * as Constants from '../typesActions/listaContatosTypes'

const INITIAL_STATE = {
    lista: []
}

export default (state = INITIAL_STATE, action) => {
    //console.log('listaContatosReducer - action: ', action)

    switch (action.type) {
        case Constants.LISTA_CONTATOS_OK: 
            return { ...state, lista: action.payload }
        default: 
            return state
    }
}
