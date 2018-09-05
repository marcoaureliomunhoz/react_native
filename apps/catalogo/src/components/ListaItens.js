import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import Item from './Item';

export default class ListaItens extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            listaItens: []
        };
    }

    componentWillMount() {
        const url = 'http://faus.com.br/recursos/c/dmairr/api/itens.html';
        axios.get(url)
             .then((retorno) => {
                console.log('itens: ', retorno.data);
                this.setState({
                    listaItens: retorno.data
                });
             })
             .catch((retorno) => {
                console.log(retorno);
             });
    }

    renderItens() {
        return this.state.listaItens.map((item, i) => (
            <Item key={`item_${i}`} valores={item} />
        ));
    }
    
    render() {
        return (
            <ScrollView style={{ backgroundColor: '#f5f5f5' }}>
                {this.renderItens()}
            </ScrollView>
        );
    }
}
