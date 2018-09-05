# React Native

React native é uma plataforma javascript para Android e iOS. O código javascript não é convertido em Java ou Swift, mas sim interpretado por uma vm (máquina virtual) que por sua vez aciona a API nativa.

**Criando uma Aplicação**  

```cmd
$ react-native init --version="0.55.4" <app>
$ cd <app>
$ npm install --save-dev eslint-config-rallycoding
$ react-native run-android
ou 
$ react-native run-android --deviceId <id>
```  

**Configurando ESLint**  

Crie na raiz do projeto um arquivo chamado ".eslintrc" e configure seu conteúdo.

```json
{
    "extends": "rallycoding",
    "rules": {
        "semi": "off"
    }
}
```

**Gerando APKs assinados em Android**  

https://facebook.github.io/react-native/docs/signed-apk-android 

**Componentes e APIs da Comunidade**  

- https://github.com/aksonov/react-native-router-flux (navegação)  
- https://github.com/react-native-community/react-native-tab-view
- https://github.com/crazycodeboy/react-native-splash-screen
- https://rnfirebase.io  

**Ignorando Alertas Indesejáveis com YellowBox**  

```javascript
import { AppRegistry, YellowBox } from 'react-native'
import App from './src/App'

YellowBox.ignoreWarnings([
    'Warning: isMounted(...) is deprecated',
    'Setting a timer'
])

AppRegistry.registerComponent('app', () => App)
```

**Observações**  

- Ao utilizar navegação com a versão "0.55.4" do react native é importante atualizar o pacote "react-navigation" para uma versão mais recente.  
    ```cmd  
    $ npm install --save react-navigation
    ```  

--- 

**Fontes**   

- https://facebook.github.io/react-native  
- https://medium.com/nutripad/react-native-webview-ou-realmente-nativo-4e30a37ae020  
- https://www.youtube.com/watch?v=S0T3ocPUotk (Será que o React Native é mesmo nativo? - Programador Br - Ep.38)  
- https://pt.stackoverflow.com/questions/297133/como-usar-firebase-notification-em-um-projeto-react-native 
- https://medium.com/yale-sandbox/react-native-push-notifications-with-firebase-cloud-functions-74b832d45386 
