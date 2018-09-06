import React, { Component } from 'react';
import {
  View, Text,   
  TextInput, Button
} from 'react-native'
import SQLite from 'react-native-sqlite-storage'

let db = null

export default class App extends Component {
  
  constructor(props) {
    super(props)

    this.state = {
      contato: '',
      nome: ''
    }
  }

  componentWillMount() {
    db = SQLite.openDatabase({name: 'teste_sqlite.db'}, this.openCB, this.errorCB)
    db.transaction(function(tx) {
      tx.executeSql('CREATE TABLE IF NOT EXISTS contatos (contato, nome)')
      //tx.executeSql('INSERT INTO contatos VALUES (?,?)', ['3223-1441', 'Marco'])
    }, function(error) {
      console.log('erro ao iniciar bd: ' + error.message);
    }, function() {
      console.log('bd inicializada com sucesso');
    });
  }

  openCB() {
    console.log('openCB')
  }

  errorCB(error) {
    console.log('errorCB: ', error)
    db = null
  }

  onChangeTextContato(contato) {
    this.setState({ ...this.state, contato })
  }

  onChangeTextNome(nome) {
    this.setState({ ...this.state, nome })
  }

  salvar() {
    console.log(this.state)
    db.transaction((tx) => {
      tx.executeSql('select count(*) as qtde from contatos where contato = ?', [this.state.contato],
      (txr1, results1) => {
        if (results1.rows.length > 0) {
          const row = results1.rows.item(0)
          console.log(row)
          let sql = 'insert into contatos (nome,contato) values (?,?)'
          if (row.qtde > 0) {
            sql = 'update contatos set nome = ? where contato = ?'
          }
          txr1.executeSql(sql, [this.state.nome, this.state.contato], 
          (txr2, results2) => {
            console.log('contato salvo com sucesso: ', results2)
            this.setState({contato: '', nome: ''})
          },
          (txr2, error2) => {
            console.log('erro ao salvar: ', error2)
          })
        }
      },
      (txr1, error1) => {
        console.log('erro ao localizar: ', error1)
      })
    })
  }

  carregar() {
    db.transaction((tx) => {
      tx.executeSql('select * from contatos where contato = ?', [this.state.contato], (tx, results) => {
          const len = results.rows.length
          if (results.rows.length > 0) {
            let row = results.rows.item(0)
            console.log('contato: ', row)
            this.setState({contato: row.contato, nome: row.nome})
          }
        })
    })
  }
  
  render() {
    return (
      <View style={{ flex: 1, padding: 20 }}>
        <Text>Contato</Text>
        <TextInput onChangeText={(text) => this.onChangeTextContato(text)} value={this.state.contato} />
        <Text>Nome</Text>
        <TextInput onChangeText={(text) => this.onChangeTextNome(text)} value={this.state.nome} />
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 1, padding: 2 }}>
            <Button title='Salvar' onPress={() => this.salvar()} />
          </View>
          <View style={{ flex: 1, padding: 2 }}>
            <Button title='Carregar' onPress={() => this.carregar()} />
          </View>
        </View>
      </View>
    )
  }
}
