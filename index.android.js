/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';
import NewsList from './components/NewsList';

class rn1 extends Component {
  render() {
        return (<NewsList/>);
    }
}

AppRegistry.registerComponent('rn1', () => rn1);
