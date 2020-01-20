import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Platform,
  ScrollView,
  SafeAreaView,
} from 'react-native';

class ScrollableProducts extends Component {
  render() {
    return (
      <View>
        <View style={{height: 14, width: 60, marginLeft: 16}}>
          <View
            style={{
              backgroundColor: 'black',
              height: 32,
              width: 64,
              borderRadius: 4,
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 16,
          }}>
          <Text style={{fontSize: 16, fontWeight: 'bold'}}>
            Nearby Restaurant
          </Text>
          <Text style={{fontSize: 16, fontWeight: 'bold', color: '#61a756'}}>
            See All
          </Text>
        </View>
        <ScrollView horizontal style={{flexDirection: 'row', paddingLeft: 16}}>
          <View style={{marginRight: 16}}>
            <View
              style={{
                width: 150,
                height: 150,
                borderRadius: 10,
                backgroundColor: 'pink',
              }}>
              <View
                style={{
                  backgroundColor: 'cream',
                  height: 32,
                  width: 64,
                  borderRadius: 4,
                }}
              />
            </View>
            <Text style={{fontSize: 16, fontWeight: 'bold', marginTop: 12}}>
              {this.props.restaurantMenu}
            </Text>
          </View>
        </ScrollView>
        <View
          style={{
            borderBottomColor: '#ebe9ed',
            borderBottomWidth: 1,
            margin: 16,
          }}></View>
      </View>
    );
  }
}
