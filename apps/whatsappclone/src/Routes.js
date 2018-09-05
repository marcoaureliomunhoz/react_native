import React from 'react'
import { Router, Scene, Stack } from 'react-native-router-flux'

import FormLogin from './components/FormLogin'
import FormCadastro from './components/FormCadastro'
import FormPrincipal from './components/FormPrincipal'
import FormCadContato from './components/FormCadContato'
import FormConversa from './components/FormConversa'

export default () => (
    <Router 
        navigationBarStyle={{ backgroundColor: '#115e54' }} 
        titleStyle={{ color: 'white' }}
        navBarButtonColor='white'
    >
      <Stack key="root">
        <Scene 
          key="login" 
          component={FormLogin} 
          title="Login" hideNavBar 
        />
        
        <Scene 
          key="cadastro" 
          component={FormCadastro} 
          title="Cadastro" 
        />
        
        <Scene 
          key="principal" 
          component={FormPrincipal} 
          title="WhatsApp Clone" 
          hideNavBar 
        />

        <Scene 
          key="cadContato" 
          component={FormCadContato} 
          title="Novo Contato" 
        />

        <Scene 
          key="conversa" 
          component={FormConversa} 
          title="Conversa" 
        />
      </Stack>
    </Router>
)
