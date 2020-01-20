import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';

const SearchFeature = props => {
  return (
    <View style={{marginHorizontal: 16, flexDirection: 'row'}}>
      <View style={{position: 'relative', flex: 1}}>
        <TextInput
          placeholder="What do you want to eat?"
          style={{
            borderWidth: 1,
            borderColor: '#E8E8E8',
            borderRadius: 24,
            height: 38,
            fontSize: 12,
            paddingLeft: 36,
            paddingRight: 22,
            backgroundColor: 'white',
          }}
        />
        {/* <Iconn
      name="search"
      size={18}
      color="black"
      style={{position: 'absolute', top: 10, left: 12}}
    /> */}
        <View
          style={{
            backgroundColor: '#dddddd',
            width: 24,
            height: 24,
            position: 'absolute',
            top: 8,
            left: 8,
          }}
        />
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginHorizontal: 16,
        }}>
        {/* <Icon name="gamepad-round-right" size={24} color="#43AB4A" /> */}
        <View
          style={{
            backgroundColor: 'orange',
            width: 24,
            height: 24,
            left: 10,
          }}
        />
      </View>
    </View>
  );
};

export default SearchFeature;
