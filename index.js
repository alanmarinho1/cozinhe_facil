/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Login from './screens/Login';
import Entrar from './screens/Entrar';
import Registrar from './screens/Registrar';
import App from './screens/TestLogin';
import {name as appName} from './app.json';
import { NavigationContainer } from '@react-navigation/native';

<NavigationContainer>{AppRegistry.registerComponent(appName, () => App)}</NavigationContainer>
//AppRegistry.registerComponent(appName, () => App);
