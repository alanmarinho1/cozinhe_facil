/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Login from './screens/Login';
import Entrar from './screens/Entrar';
import Registrar from './screens/Registrar';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Entrar);
