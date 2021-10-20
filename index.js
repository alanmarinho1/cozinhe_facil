/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Login from './screens/Login';
import Entrar from './screens/Entrar';
import Registrar from './screens/Registrar';
import TelaPrincipal from './screens/TelaPrincipal';
import App from './App';
import {name as appName} from './app.json';
import { NavigationContainer } from '@react-navigation/native';

AppRegistry.registerComponent(appName, () => TelaPrincipal);
