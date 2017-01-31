'use strict'
import React, { Component } from 'react';
import {
  View,
  Text,
  Touchablehighlight,
  Alert,
  StyleSheet
} from 'react-native'

class loginView extends Component{
  render(){
    return(
      <View>
        <Touchablehighlight onPress={(this.onLogin.bind(this))}>
        <Text>Login</Text>
        </Touchablehighlight>
      </View>
    )
  }

  onLogin(){
    console.log('Has pulsado el boton Login')
  }
}

module.exports = loginView;
