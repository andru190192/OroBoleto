'use strict'
import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  Button,
  Alert,
  StyleSheet
} from 'react-native'

class loginView extends Component{
  render(){
    return(
      <Image source={{uri: 'https://s-media-cache-ak0.pinimg.com/564x/cc/08/1a/cc081a766298994c45611eb354980c7a.jpg'}}
        style={styles.container}>
        <View>
        <Text style={styles.title}>SuperHero</Text>
          <Button onPress={(this.onLogin.bind(this))} title='Login' />
        </View>
      </Image>
    )
  }

  onLogin(){
    Alert.alert(
      'Acceso',
      'Te has logueado en el sistema',
      [
        {
          text: 'Aceptar',
          onPress: (this.aceptar.bind(this))
        },
        {
          text: 'Cancelar',
          onPress: (this.cancelar.bind(this))
        }
      ]
    )
  }

  aceptar(){
    this.props.navigator.replace({
      title: 'Dashboard',
      name: 'Dashboard',
      passProps: {}
    });
  }

  cancelar(){
    Alert.alert('Login cancelado');
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    padding: 30
  },
  title: {
    marginTop: 50,
    fontSize: 25,
    marginBottom: 50,
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0)'
  }
});

module.exports = loginView;
