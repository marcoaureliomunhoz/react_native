import { AppRegistry, YellowBox } from 'react-native';
import App from './src/app/App';

YellowBox.ignoreWarnings([
    'Warning: isMounted(...) is deprecated'
]);  

AppRegistry.registerComponent('routerflux1', () => App);
