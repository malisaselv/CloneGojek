import React, {Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import NavBar from '../components/NavBar';

class Orders extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1}}>
          <Text style={{flex: 1}}>Halaman Orders</Text>
          <NavBar />
        </View>
      </SafeAreaView>
    );
  }
}

export default Orders;
