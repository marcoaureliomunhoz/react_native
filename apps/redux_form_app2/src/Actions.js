import { reset as resetForm, initialize} from 'redux-form'

const INITIAL_VALUES = {
    nome: '', 
    email: ''
}

export function salvar(values) {
    console.log('salvar:', values)
    return {
        type: 'salvar'
    }
}

export function alterar(cadastro) {
    return initialize('formCadastro',cadastro)
}

export function init() {
    return initialize('formCadastro',INITIAL_VALUES)
}