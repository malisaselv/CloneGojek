import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Platform} from 'react-native';

const MainFeature = props => {
  return (
    <View style={{width: '25%', alignItems: 'center', marginBottom: 8}}>
      <View
        style={{
          width: 54,
          height: 54,
          borderWidth: 1,
          borderColor: '#efefef',
          borderRadius: 16,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            backgroundColor: props.bgcolor,
            width: 24,
            height: 24,
          }}
        />
      </View>
      <Text
        style={{
          fontSize: 12,
          fontWeight: 'bold',
          textAlign: 'center',
          marginTop: 6,
        }}>
        {props.title}
      </Text>
    </View>
  );
};

export default MainFeature;
