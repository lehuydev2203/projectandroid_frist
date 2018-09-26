import React, { Component } from 'react';
import { View,Text,StyleSheet,TouchableOpacity } from 'react-native';
import Content from './content'
class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
        descript:'this is the frist product with react native . Now you can see , everything so fresh ',
        icon:'Click me !!!'
    };
    this.updateState=this.updateState.bind(this);// giống cú pháp viết react vẫn bắt buộc phải có bind(this)
  }

  updateState=()=>this.setState({descript:'the state update'});

  render() {
    return (
      <View style={style.container_home}>
        <Content style={style.text_center} descript={this.state.descript} 
            icon={this.state.icon}></Content> 
        <TouchableOpacity onPress={this.updateState} style={style.button}>
           <Text 
                style={[style.text_white,style.text_center]}>
                {this.state.icon}
            </Text> 
        </TouchableOpacity>
      
      </View>
    );
  }
}

const style=StyleSheet.create({
    container_home:{
        height:400
    },
    button:{
        marginTop:20,
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

export default Home;
