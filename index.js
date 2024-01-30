/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import AppRpute from './src/navigation/AppRoute';

AppRegistry.registerComponent(appName, () => AppRpute);
