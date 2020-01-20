import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {withNavigation} from 'react-navigation';
class NavBar extends Component {
  // state = {  }
  render() {
    return (
      <View
        style={{
          height: 54,
          flexDirection: 'row',
          backgroundColor: 'white',
        }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {/* <Image style={{width:26, height:26}} source={require('./icon/home.png')} /> */}
          {/* <Icon name="home" size={28} color="#43AB4A" /> */}
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Home');
            }}>
            <View
              style={{
                backgroundColor: '#43AB4A',
                width: 24,
                height: 24,
              }}
            />
            <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>
              Home
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          {/* <Icon name="reorder-horizontal" size={28} color="#545454" /> */}
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Orders');
            }}>
            <View
              style={{
                backgroundColor: '#43AB4A',
                width: 24,
                height: 24,
              }}
            />
            <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>
              Orders
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          {/* <Icon name="help-box" size={28} color="#545454" /> */}
          <View
            style={{
              backgroundColor: '#43AB4A',
              width: 24,
              height: 24,
            }}
          />
          <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>
            Help
          </Text>
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          {/* <Icon name="inbox" size={28} color="#545454" /> */}
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Inbox');
            }}>
            <View
              style={{
                backgroundColor: '#43AB4A',
                width: 24,
                height: 24,
              }}
            />
            <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>
              Inbox
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          {/* <Icon name="account" size={28} color="#545454" /> */}
          <View
            style={{
              backgroundColor: '#43AB4A',
              width: 24,
              height: 24,
            }}
          />
          <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>
            Account
          </Text>
        </View>
      </View>
    );
  }
}

export default withNavigation(NavBar);
