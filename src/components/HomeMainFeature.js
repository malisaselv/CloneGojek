import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import MainFeature from './MainFeature';

class HomeMainFeature extends Component {
  // state = {  }
  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          marginTop: 16,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
            flexWrap: 'wrap',
          }}>
          <MainFeature title="GO-RIDE" bgcolor="white" />
          <MainFeature title="GO-CAR" bgcolor="yellow" />
          <MainFeature title="GO-BLUEBIRD" bgcolor="green" />
          <MainFeature title="GO-SEND" bgcolor="blue" />
          <MainFeature title="GO-DEALS" bgcolor="blue" />
          <MainFeature title="GO-PULSA" bgcolor="pink" />
          <MainFeature title="GO-FOOD" bgcolor="red" />
          <MainFeature title="MORE" bgcolor="white" />
        </View>
      </View>
    );
  }
}

export default HomeMainFeature;
