import React, { Component } from 'react';
import { View, Text,StyleSheet } from 'react-native';

class Content extends Component {
    render() {
    return (
      <View>
        <Text style={style.text_center}>{this.props.descript}</Text>
      </View>
    );
  }
}

const style=StyleSheet.create({
  button:{
      width:80,
      height:20,
      backgroundColor:"blue",
      alignSelf:'center'
  },
  text_white : {
      color:'white'
  },
  text_center:{
      textAlign:'center'
  }
});
export default Content;
