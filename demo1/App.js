/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet,TouchableOpacity, Text, View} from 'react-native';
// import Home from './src/component/home/home.js';
// import List from './src/component/list view/list';
// import Input from './src/component/textInput/textInput';
import Scroll from "./src/component/scrollview/home";

class App extends Component {
  render(){
    return(
      <View style={style.containner}>
        <View>
          <Text style={style.header}>Login</Text>
        </View>
        <View>
          <Scroll/>
        </View>
        <View>
          <Text style={style.header}>&copy;Project Android - Lê Huy</Text>
        </View>
      </View>
    );
  }
}  
const style=StyleSheet.create({
  containner:{
    flex: 1,
    flexDirection: 'column',
    justifyContent:'space-between'/*để chia header and footer nằm trên cùng và dưới cùng */
  }
,
  header:{
    height:50,
    fontWeight:"bold",
    textAlign:'center',
    backgroundColor:'aqua',
    lineHeight:50
  } 
});

export default App;