import React, {Component} from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import NavBar from '../components/NavBar';

class Inbox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1}}>
          <Text style={{flex: 1}}>Halaman Inbox</Text>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('GoRideFromInbox');
            }}>
            <Text>Pindah Halaman GoRide</Text>
          </TouchableOpacity>
          <NavBar />
        </View>
      </SafeAreaView>
    );
  }
}

export default Inbox;
