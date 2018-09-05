import React, { Component } from 'react'
import { 
    View, Text, Image, 
    TextInput, TouchableOpacity, ListView 
} from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ImgEnviarMensagem from '../assets/img/enviar_mensagem.png'

import { 
    onChangeMessage, 
    enviaMensagem, 
    conversaUsuarioFetch
} from '../actions/appActions'

class FormConversa extends Component {

    componentWillMount() {
        console.log('FormConversa componentWillMount')
        this.props.conversaUsuarioFetch(this.props.contatoEmail)
        this.defineFonteDados(this.props.mensagens)
    }

    componentWillReceiveProps(nextProps) {
        console.log('FormConversa componentWillReceiveProps')
        if (this.props.contatoEmail !== nextProps.contatoEmail) {
            console.log('FormConversa componentWillReceiveProps emails diferentes')
            this.props.conversaUsuarioFetch(nextProps.contatoEmail)
        }
        this.defineFonteDados(nextProps.mensagens)
    }

    defineFonteDados(mensagens) {
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
        this.fonteDados = ds.cloneWithRows(mensagens)
    }

    enviaMensagem() {
        this.props.enviaMensagem(
            this.props.mensagem, 
            this.props.contatoNome, 
            this.props.contatoEmail
        )
    }

    renderRow(conversa) {
        if (conversa.tipo === 'e') {
            return (
                <View 
                    style={{ 
                        alignItems: 'flex-end', 
                        marginLeft: 40, 
                        marginVertical: 5                        
                    }}
                >
                    <Text 
                        style={{ 
                            color: '#000', 
                            padding: 10, 
                            backgroundColor: '#dbf5b4', 
                            elevation: 1, 
                            borderWidth: 1,
                            borderColor: '#dbf5b4',
                            borderTopLeftRadius: 10, 
                            borderBottomLeftRadius: 10,
                            borderBottomRightRadius: 10
                        }}
                    >{conversa.mensagem}</Text>
                </View>
            )
        }

        return (
            <View 
                style={{ 
                    alignItems: 'flex-start', 
                    marginRight: 40, 
                    marginVertical: 5
                }}
            >
                <Text 
                    style={{ 
                        color: '#000', 
                        padding: 10, 
                        backgroundColor: '#fff', 
                        elevation: 1, 
                        borderWidth: 1,
                        borderColor: '#fff',
                        borderTopRightRadius: 10, 
                        borderBottomLeftRadius: 10,
                        borderBottomRightRadius: 10
                    }}
                >{conversa.mensagem}</Text>
            </View>
        )
    }

    render() {
        return (
            <View style={{ flex: 1, padding: 15, backgroundColor: '#eee4dc' }}>
                <View style={{ flex: 1, paddingBottom: 20 }}>
                    <ListView 
                        enableEmptySections
                        dataSource={this.fonteDados}
                        renderRow={this.renderRow}
                    />
                </View>
                <View 
                    style={{ 
                        height: 60, 
                        flexDirection: 'row', 
                        backgroundColor: 'white', 
                        borderRadius: 5 
                    }}
                >
                    <TextInput 
                        style={{ flex: 4 }} 
                        value={this.props.mensagem}
                        onChangeText={text => this.props.onChangeMessage(text)}
                    />
                    <TouchableOpacity onPress={() => this.enviaMensagem()}>
                        <Image source={ImgEnviarMensagem} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const mapStateToProps = state => ({
    mensagem: state.app.mensagem, 
    mensagens: state.listaConversas.mensagens
})
const mapDispatchToProps = dispatch => bindActionCreators({
    onChangeMessage, enviaMensagem, conversaUsuarioFetch
}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(FormConversa)
