import React, { Component } from 'react';
import {FlatList, Text, View, StyleSheet,TouchableOpacity,Image} from 'react-native';
import {createStackNavigator} from 'react-navigation';
import { Icon } from 'react-native-elements';
import {Button} from 'native-base';


class Logo extends Component{
    render(){
        return(
            <View>
                <Text style={{color:'white',fontSize:15,fontWeight:'bold',marginLeft: 10}}>Nari Mart</Text>
            </View>
        );
    }
}

class Menu extends Component{
    static navigationOptions = ({
        headerLeft:(<Logo/>),
        headerStyle: {
            height:30,
            color:'white',
            textAlign:'center',
            backgroundColor: 'steelblue',
            marginBottom: 5
        }
    })

    createNote=(props)=>{
        let max= this.state.id ;
        if(max<=max){
            max += 1;
        }else{
            this.setState();
        }

    }


    render(){
        return(
            <View style={{flex:1,flexDirection:'column',justifyContent:'center'}}>
                <Text style={{color:'steelblue',textAlign:'center',fontWeight:'bold',fontSize:20,marginBottom:20}}>Menu</Text>

                <Button style={{width:140,backgroundColor:'steelblue',alignSelf:'center',marginBottom:20}} >
                    <Text style={{color:'white',fontWeight:'bold',marginLeft:10,textAlign:'left'}}>Create Note</Text>
                    <View style={{marginRight:10,alignSelf:'center'}}><Icon size={20} color={'white'} type={'font-awesome'} name={'plus'}/></View>
                </Button>

                <Button style={{width:140,backgroundColor:'steelblue',alignSelf:'center',marginBottom:20}} >
                    <Text style={{color:'white',fontWeight:'bold',marginLeft:10,textAlign:'left'}}>Download File</Text>
                    <View style={{marginRight:10,alignSelf:'center'}}><Icon size={20} color={'white'} type={'font-awesome'} name={'cloud-download'}/></View>
                </Button>

                <Button style={{width:140,backgroundColor:'steelblue',alignSelf:'center',marginBottom:20}} >
                    <Text style={{color:'white',fontWeight:'bold',textAlign:'right',marginLeft:10}}>Upload File</Text>
                    <View style={{marginRight:10,alignSelf:'center',left:0}}><Icon size={20} color={'white'} type={'font-awesome'} name={'upload'}/></View>
                </Button>

                 <Button style={{width:140,backgroundColor:'steelblue',alignSelf:'center'}} onPress={()=>this.props.navigation.goBack() }>
                    <Text style={{color:'white',fontWeight:'bold',textAlign:'right',marginLeft:10}}>Back</Text>
                    <View style={{marginRight:10,alignSelf:'center',left:0}}><Icon size={20} color={'white'} type={'font-awesome'} name={'arrow-circle-left'}/></View>
                </Button>

            </View>
        );
    }
}

class Home extends Component {

    static navigationOptions = ({navigation}) => ({
        headerLeft:(<Logo/>),
        headerStyle: {
            height:30,
            color:'white',
            backgroundColor: 'steelblue',
            marginBottom: 5
        },
        headerRight:( <Icon name='menu' type='entypo' color='white' onPress={()=>navigation.navigate('Menu')}/> ),
    })
    state = {
        names:[
            {'id':1,'key':'Note 1'},
            {'id':2,'key':'Note 2'},
            {'id':3,'key':'Note 3'},
            {'id':4,'key':'Note 4'},
            {'id':5,'key':'Note 5'},
            {'id':6,'key':'Note 6'},
            {'id':7,'key':'Note 7'},
            {'id':8,'key':'Note 8'},
            {'id':9,'key':'Note 9'},
            {'id':10,'key':'Note 10'},
            {'id':11,'key':'Note 11'},
            {'id':12,'key':'Note 12'}
        ]
    };

    render() {
        return (
            <View style={{flex: 1, flexDirection: 'column',justifyContent: 'space-between'}}>

                <View style={{flex: 1}}>
                    <FlatList style={{flex: 1}}
                              data={this.state.names}
                              renderItem={({item})=>
                                  <TouchableOpacity style={{justifyContent: 'center',flex:1,height: 150,margin: 5,backgroundColor: '#00BCD4'}}
                                                    onPress={()=>{this.props.navigation.navigate('Profile',{key : item.key})}}
                                  >
                                      <View style={{flex: 1, flexDirection: 'column',justifyContent: 'space-between'}}>

                                          <View style={{height: 25, backgroundColor: 'steelblue'}}>
                                              <Text style={{alignSelf:'center',fontWeight:'bold',fontSize:12,color:'white',lineHeight:25}}>{item.key}</Text>
                                          </View>

                                          <View ><Text style={{alignSelf:'center', color:'white'}}>{item.id}</Text></View>

                                          <View style={{height: 25, backgroundColor: 'steelblue'}}>
                                              <Text style={{alignSelf:'center',fontSize:12,fontWeight:'bold',color:'white',lineHeight:25}}>&copy; Lê Huy</Text>
                                          </View>

                                      </View>
                                  </TouchableOpacity>


                              }
                              numColumns={2}
                    />

                </View>
            </View>
        );
    }
}

class Profile extends Component{
    static navigationOptions = ({navigation}) => ({
        headerLeft:(<Button
            onPress={()=>navigation.goBack()}
            style={{height:30, width:30,
                backgroundColor: '#3eb4c1',}}
        ><Text
            style={{marginLeft :10,color:'white',fontWeight:'bold'}}
        >&lt;</Text></Button>),
        headerStyle: {
            height:30,
            color:'white',
            backgroundColor: 'steelblue',
            marginBottom: 5
        },
    })

    constructor(props) {
        super(props);

        const key = this.props.navigation.getParam('key','some default value');
        console.log(key);
    }

    render(){
        const {navigation} = this.props;
        const key= navigation.getParam('key','some default value');
        console.log(key);
            return(
                <View style={{flex: 1, flexDirection: 'column',justifyContent: 'space-between'}}>
                    <View style={{flex: 1}}>
                          <View style={{justifyContent: 'center',flex:1,height: 150,margin: 5,backgroundColor: 'white'}}>
                              <View style={{flex: 1, flexDirection: 'column',justifyContent: 'space-between'}}>

                                  <View style={{height: 30, backgroundColor: 'steelblue'}}>
                                      <Image source = {require('./img/logonarimart.png')} style={{width:133,height:20,marginLeft:5,marginTop:5}}/>
                                  </View>

                                  <View></View>

                                  <View style={{height: 30, backgroundColor: 'steelblue'}}>
                                      <Text style={{textAlign:'right',fontSize:12,color:'white',marginRight:10,fontWeight:'bold',lineHeight:30}}>{key}</Text>
                                  </View>

                              </View>

                          </View>
                    </View>
                </View>

        );
    }
}

const styles=StyleSheet.create({
    banner:{
        alignSelf:'center',fontSize:16,color:'white',lineHeight:25,fontWeight:'bold'
    },
    bannerRight:{
        alignSelf:'stretch',fontSize:16,color:'white',lineHeight:25,fontWeight:'bold'
    }
});

export default createStackNavigator({
  Home: {
    screen:Home,
  },
    Profile:{
        screen:Profile,
    },
    Menu: {
        screen:Menu,
    },


},{
    mode:"modal",
    headermode:"none",
});
