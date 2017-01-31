import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

const Login = require('./src/components/loginView')
const Dashboard = require('./src/components/dashboardView')

class OroBoleto extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          WasiCodigo
        </Text>
        <Login></Login>
        <Dashboard></Dashboard>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('OroBoleto', () => OroBoleto);
