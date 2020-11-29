# React Native

React native é uma plataforma javascript para Android e iOS. O código javascript não é convertido em Java ou Swift, mas sim interpretado por uma vm (máquina virtual) que por sua vez aciona a API nativa.

**Configurando o Ambiente**  

- https://facebook.github.io/react-native/docs/0.56/getting-started

Depois de acessar o link acima acione a opção **Building Projects with Native Code**, selecione o sistema operacional e siga os passos para configurar o ambiente.

**Criando uma Aplicação**  

```cmd
criando um app com uma versão específica do react-native
$ npx react-native init --version="0.55.4" <app>
criando um app com a última versão do react-native
opcionalmente você pode definir o template
$ npx react-native init <app> [--template react-native-template-typescript]
$ cd <app>
$ npm install --save-dev eslint-config-rallycoding
$ emulator -avd Pixel_2_API_29
ou 
$ emulator -avd Pixel_2_API_29 -gpu swiftshader_indirect
$ npx react-native start --reset-cache
$ npx react-native run-android
ou 
$ npx react-native run-android --deviceId <id>
```  

**Listando os devices Android**

```cmd
$ adb devices
$ emulator -list-avds
```

**Problemas**
- Erro Unable to load script from assets 'index.android.bundle'.make sure you bundle is packaged correctly:
```cmd
$ react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
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
- https://github.com/andpor/react-native-sqlite-storage  
- https://github.com/sriraman/react-native-shared-preferences  
- https://github.com/wwayne/react-native-user-defaults  
- https://github.com/kevinresol/react-native-default-preference  
- https://github.com/oblador/react-native-keychain  
- https://github.com/pradeep1991singh/react-native-secure-key-store  
- https://github.com/rt2zz/redux-persist
- https://github.com/CodingZeal/redux-persist-sensitive-storage
- https://github.com/antoniopresto/react-native-local-mongodb
- https://docs.expo.io/versions/latest/sdk/sqlite

**Ignorando Alertas Indesejáveis com YellowBox**  

Altere o arquivo "index.js" que fica na raiz do projeto.

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
- https://facebook.github.io/react-native/versions  
- https://github.com/facebook/react-native/releases  
- https://medium.com/nutripad/react-native-webview-ou-realmente-nativo-4e30a37ae020  
- https://www.youtube.com/watch?v=S0T3ocPUotk (Será que o React Native é mesmo nativo? - Programador Br - Ep.38)  
- https://pt.stackoverflow.com/questions/297133/como-usar-firebase-notification-em-um-projeto-react-native 
- https://medium.com/yale-sandbox/react-native-push-notifications-with-firebase-cloud-functions-74b832d45386 
- http://www.reactnative.com 
- http://randycoulman.com/blog/2017/07/25/secure-storage-in-react-native 
- https://medium.com/wolox-driving-innovation/https-medium-com-wolox-driving-innovation-easy-forms-in-react-native-with-redux-form-1cdc16a9a889
- https://esbenp.github.io/2017/01/06/react-native-redux-form-immutable-styled-components
- http://docs.nativebase.io/docs/examples/ReduxFormExample.html
- https://redux.js.org 
- https://redux-form.com
- http://docs.dronahq.com/en/latest/developer/api-device-sqlite.html
- https://blog.rocketseat.com.br/autenticacao-react-native-nodejs
