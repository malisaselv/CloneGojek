import React, {Component} from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import NavBar from '../components/NavBar';

class GoRide extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log();
    this.nama = props.navigation.getParam('nama');
  }
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1}}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={() => this.props.navigation.goBack(null)}>
              <Text>Kembali</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.push('GoRide');
              }}>
              <Text>Pindah Halaman GoRide</Text>
            </TouchableOpacity>
          </View>
          <Text style={{flex: 1}}>{this.nama}</Text>
        </View>
      </SafeAreaView>
    );
  }
}

export default GoRide;
