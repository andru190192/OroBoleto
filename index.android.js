/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
//Importaciones
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  Button,
  TouchableHighlight
} from 'react-native';

var NavigatorBarRouteMapper = {
  LeftButton: function(route, navigator, index){
    if(index == 0){
      return null
    }
    return(
      <TouchableHighlight onPress={() => {
        if(index > 0){
            navigator.pop();
        }
      }}>
        <Text style={{marginTop:10,marginLeft:20,color:'#007AFF'}}>Back</Text>
      </TouchableHighlight>
    )
  },
  RightButton: function(route,navigator,index){
    return null;
  },
  Title: function(route,navigator,index){
    if(route.name == 'Login'){
      return null
    }
    return(
      <Text style={{marginTop:10,color:'#007AFF'}}>
        {route.name}
      </Text>
    )
  }
}

const Login = require('./src/components/loginView')
const Tabs = require('./src/components/tabs');

//Componente
class AwesomeProject extends Component {

  renderScene(route, navigator){
    switch (route.name) {
      case 'Login':
        return (
          <Login navigator={navigator} route={route}></Login>
        );
        case 'Dashboard':
        return(
          <Tabs {...route.props} navigator={navigator} route={route}></Tabs>
        );
    }
  }

  render() {
    return (
      <Navigator style={{backgroundColor: '#fff'}}
        initialRoute={{name: 'Login'}}
        renderScene={this.renderScene}
        configureScene={(route) => {
          if(route.sceneConfig){
            return route.sceneConfig;
          }
          return Navigator.SceneConfigs.FloatFromRight
        }}
        navigatorBar={
          <Navigator.NavigatorBar
            routeMapper={NavigatorBarRouteMapper}/>
        } >
      </Navigator>
    );
  }
}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
