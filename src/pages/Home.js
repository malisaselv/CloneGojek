import React, {Component} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import GonewsFeature from '../components/GonewsFeature';
import HomeGopay from '../components/HomeGopay';
import HomeMainFeature from '../components/HomeMainFeature';
import NavBar from '../components/NavBar';
import SearchFeature from '../components/SearchFeature';

class Home extends Component {
  // state = {  }
  render() {
    return (
      <View style={{flex: 1}}>
        <SafeAreaView style={{flex: 1}}>
          <ScrollView style={{flex: 1}}>
            <View style={{flex: 1, backgroundColor: '#DDDDDD'}}>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('GoRide', {nama: 'malisa'});
                }}>
                <Text>Pindah Halaman GoRide</Text>
              </TouchableOpacity>
              <SearchFeature />
              <HomeGopay />
              {/* main feature */}
              <HomeMainFeature />
              {/* line grey */}
              <View
                style={{
                  height: 16,
                  backgroundColor: '#f2f2f4',
                  marginTop: 16,
                }}></View>
              {/* News Section */}
              <GonewsFeature news="Marc Marquez juara dunia motogp 2019 di Phillips Island" />
            </View>
          </ScrollView>
          <NavBar />
        </SafeAreaView>
      </View>
    );
  }
}

export default Home;
