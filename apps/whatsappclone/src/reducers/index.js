import { combineReducers } from 'redux'
import autenticacaoReducer from './autenticacaoReducer'
import appReducer from './appReducer'
import listaContatosReducer from './listaContatosReducer'
import listaConversasReducer from './listaConversasReducer'

export default combineReducers({
    autenticacao: autenticacaoReducer, 
    app: appReducer, 
    listaContatos: listaContatosReducer, 
    listaConversas: listaConversasReducer
})
