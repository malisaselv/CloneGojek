import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';

const GonewsFeature = props => {
  return (
    <View style={{paddingTop: 16, paddingHorizontal: 16}}>
      <View>
        <View
          style={{
            backgroundColor: 'black',
            height: 170,
            width: '100%',
            borderRadius: 4,
          }}
        />
      </View>
      <View
        style={{
          paddingVertical: 16,
          borderBottomColor: '#e8e9ed',
          borderBottomWidth: 1,
          marginBottom: 16,
        }}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
          }}>
          GO-NEWS
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: 'bold',
            color: '#7a7a7a',
          }}>
          {props.news}
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: '#61a756',
            padding: 12,
            alignSelf: 'flex-end',
            borderRadius: 6,
          }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: 'bold',
              color: 'white',
            }}>
            READ
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GonewsFeature;
