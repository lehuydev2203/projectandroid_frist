import React, { Component } from 'react';
import {View} from 'react-native';
import ScrollView from './scrollview.js';

class Home extends Component {

  render() {
      console.log('2');
    return (
        <View>
            <ScrollView/>
        </View>
    );
  }
}

export default Home;
