import { AppRegistry } from 'react-native';

import { App } from '@theme-context-storybook-repro/components/src/App';

AppRegistry.registerComponent('myprojectname', () => App);
AppRegistry.runApplication('myprojectname', {
  rootTag: document.getElementById('root'),
});
