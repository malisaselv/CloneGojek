import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Platform} from 'react-native';

const GopayFeature = props => {
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <View
        style={{
          backgroundColor: 'white',
          width: 24,
          height: 24,
        }}
      />
      <Text
        style={{
          fontSize: 14,
          fontWeight: 'bold',
          color: 'white',
          marginTop: 10,
        }}>
        {props.title}
      </Text>
    </View>
  );
};

export default GopayFeature;
