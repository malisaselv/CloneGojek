import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import GopayFeature from './GopayFeature';
import GopaySaldo from '../components/GopaySaldo';

class HomeGopay extends Component {
  // state = {  }
  render() {
    return (
      <View style={{marginHorizontal: 16, marginTop: 8}}>
        <GopaySaldo saldo="50.000" />
        <View
          style={{
            flexDirection: 'row',
            paddingVertical: 16,
            backgroundColor: '#2f65bd',
            borderBottomLeftRadius: 4,
            borderBottomRightRadius: 4,
          }}>
          <GopayFeature title="Pay" />
          <GopayFeature title="Nearby" />
          <GopayFeature title="Top Up" />
          <GopayFeature title="More" />
        </View>
      </View>
    );
  }
}

export default HomeGopay;
