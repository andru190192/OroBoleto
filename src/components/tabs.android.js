'use strict'

import React, { Component } from 'react';

import TabNavigator from 'react-native-tab-navigator'

import {
    Text,
    View,
    TouchableHighlight,
    Alert,
    StyleSheet,
    Image
} from 'react-native'


const Dashboard = require('./dashboardView')
const Heroes =  require('./heroesView')


class Tabs extends Component{
    constructor(props){
  	super(props);
    this.state = {selectedTab: 'dashboard'}
  }

  render() {
    return (
      <TabNavigator>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'dashboard'}
          style={{width: 20, height: 20}} />}
          title="Dashboard"
          onPress={() => this.setState({ selectedTab: 'dashboard' })}>
          <Dashboard {...this.props.route}  navigator={this.props.navigator} route={this.props.route}></Dashboard>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'heroes'}
          style={{width: 25, height: 25}} />}
          title="Heroes"
          onPress={() => this.setState({ selectedTab: 'heroes' })}>
          <Heroes></Heroes>
        </TabNavigator.Item>
      </TabNavigator>
    );
  }
}
module.exports = Tabs;
