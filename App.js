import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View>
      <View style={{marginTop:50}}>
        <Text >My first App</Text>
        </View>
        <View style={{marginTop:100,marginLeft:100,marginRight:100,width : 200,height : 44,borderWidth : 5,borderHeight : 5}}>
        <Button color = "green" title = "CLICK ME"></Button>
            </View>
        </View>
    );
  }
}