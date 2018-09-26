import React, { Component } from 'react';
import { StyleSheet, FlatList, Text, View, Alert,TouchableOpacity,Button, Platform  } from 'react-native';
import {createStackNavigator} from 'react-navigation';

class Flat extends Component {
  state = {
        names:[
            {'key':'images 1'},
            {'key':'images 2'},
            {'key':'images 3'},
            {'key':'images 4'},
            {'key':'images 5'},
            {'key':'images 6'},
            {'key':'images 7'},
            {'key':'images 8'},
            {'key':'images 9'},
            {'key':'images 10'},
            {'key':'images 11'},
            {'key':'images 12'}
        ]
    };

  clickMe = (item) => {
        Alert.alert(item.key)
  }
 
  render() {
    return (
      <View style={{flex: 1}}>
        <FlatList style={{flex: 1}}
            data={this.state.names}
            renderItem={({item})=> 
              <TouchableOpacity style={{justifyContent: 'center',flex:1,height: 150,margin: 5,backgroundColor: '#00BCD4'}} 
                onPress={()=>this.props.navigation.navigate('Modal')}
              >
                          <View style={{flex: 1, flexDirection: 'column',justifyContent: 'space-between'}}>
                            <View style={{height: 25, backgroundColor: 'powderblue'}}>
                                <Text style={{alignSelf:'center',fontSize:12,color:'white',lineHeight:25}}>Header</Text>
                            </View>
                            <View><Text>{item.key}</Text></View>
                            <View style={{height: 25, backgroundColor: 'steelblue'}}>
                                <Text style={{alignSelf:'center',fontSize:12,color:'white',lineHeight:25}}>Footer</Text>
                            </View>
                          </View>
              </TouchableOpacity> 
            }
            numColumns={2}
        />
      </View>
    );
  }
}

 class Model extends Component {
  render(){
    return(
      <View style={{flex: 1,flexDirection: 'column',justifyContent: 'space-between',alignItems: 'stretch'}}>

        <View style={{height: 25, backgroundColor: 'powderblue'}}>
            <Text style={styles.banner}>Header</Text>
        </View>

        <View style={{height:250,backgroundColor:'white'}}>
          <Text>{this.props.key}</Text>
        </View>

        <View style={{ height:25,backgroundColor: 'steelblue'}}>
            <Text style={styles.banner}>Footer</Text>
            <Button
            title="Back"
            onPress={()=>this.props.navigation.navigate('Home')}
            />
        </View>

      </View>
    );
  }
}


const styles=StyleSheet.create({
  banner:{
   alignSelf:'center',fontSize:16,color:'white',lineHeight:25,fontWeight:'bold'
  }
});
export default createStackNavigator({
    Home: {
        screen:Home,
    },
    Profile:{
        screen:Profile,
    },
},{
    mode:"modal",
    headermode:"none",
});
