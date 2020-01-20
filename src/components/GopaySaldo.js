import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';

const GopaySaldo = props => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#2C5FB8',
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        padding: 16,
      }}>
      {/* <Icon name="" /> */}
      <View
        style={{
          backgroundColor: 'white',
          width: 64,
          height: 18,
          borderRadius: 10,
        }}
      />
      <Text
        style={{
          fontSize: 16,
          fontWeight: 'bold',
          color: 'white',
          marginTop: 10,
        }}>
        {props.saldo}
      </Text>
    </View>
  );
};

export default GopaySaldo;
