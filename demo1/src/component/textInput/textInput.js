import React, { Component } from 'react';
import { View, Text , TouchableOpacity , TextInput , StyleSheet } from 'react-native';

class Inputs extends Component {
  state={
      email:'',
      password:''
  }

  inputEmail=(text)=>{
      this.setState({email:text})
  }

  inputPassword=(text)=>{
      this.setState({password:text})
  }
  validateEmail = (email) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  login = (email, password) => {
    if(!this.validateEmail(this.state.email)){
      alert('Email Fail');
    }else if(this.state.password == ''){
      alert('Pass Fail');
    }else{
    alert('email: ' + email + ' password: ' + password)
  } };

  render() {
    return (
      <View style = {style.container}>
        <TextInput
        style={style.input}
        underlineColorAndroid="transparent"
        placeholder="Your email"
        placeholderTextColor="gray"
        autoCapitalize="none"
        onChangeText={this.inputEmail}
        />

        <TextInput
        style={style.input}
        underlineColorAndroid="transparent"
        placeholder="Your Password"
        placeholderTextColor="gray"
        secureTextEntry={true}
        autoCapitalize="none"
        onChangeText={this.inputPassword}
        />
        
        <TouchableOpacity
          style={style.submitButton}
          onPress={ 
              () => this.login(this.state.email,this.state.password)
              }>
          <Text style={style.submitButtonText}>Submit</Text>  
        </TouchableOpacity>
      </View>
    );
  }
}
const style=StyleSheet.create({
    container: {
        paddingTop: 23
     },
     input: {
        margin: 15,
        height: 40,
        borderColor: '#1E90FF',
        borderWidth: 1
     },
     submitButton: {
        backgroundColor: '#1E90FF',
        padding: 10,
        margin: 15,
        height: 40,
     },
     submitButtonText:{
         textAlign:'center',
        color: 'white'
     }
})
export default Inputs;
