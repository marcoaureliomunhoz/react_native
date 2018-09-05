import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';
import Home from './Home';
import Sobre from './Sobre';
import OutrosJogos from './OutrosJogos';
import Resultado from './Resultado';

export default () => (
    <Router 
        navigationBarStyle={{ backgroundColor: 'gray' }} 
        titleStyle={{ color: 'white' }}
        navBarButtonColor='blue'
    >
      <Stack key="root">
        <Scene key="home" component={Home} title="Cara e Coroa" hideNavBar />
        <Scene key="sobre" component={Sobre} title="Sobre" />
        <Scene key="outrosJogos" component={OutrosJogos} title="OutrosJogos" />
        <Scene key="resultado" component={Resultado} title="Resultado" />
      </Stack>
    </Router>
);
