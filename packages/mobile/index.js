/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';

import { App } from '@theme-context-storybook-repro/components/src/App';

AppRegistry.registerComponent(appName, () => App);
