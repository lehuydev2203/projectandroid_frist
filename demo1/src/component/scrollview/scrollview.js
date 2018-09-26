import React, { Component } from 'react';
import {Text, Image,TouchableOpacity, ScrollView,StyleSheet,View } from 'react-native';

class Scroll extends Component {
  state = {
        names:[
            {'name':'Lê Huy','id':'1'},
            {'name':'Lê Huy1','id':'2'},
            {'name':'Lê Huy2','id':'3'},
            {'name':'Lê Huy3','id':'4'},
            {'name':'Lê Huy4','id':'5'},
            {'name':'Lê Huy5','id':'6'},
            {'name':'Lê Huy6','id':'7'},
            {'name':'Lê Huy7','id':'8'},
            {'name':'Lê Huy8','id':'9'},
            {'name':'Lê Huy9','id':'10'},
            {'name':'Lê Huy10','id':'11'},
            {'name':'Lê Huy11','id':'12'},
            {'name':'Lê Huy12','id':'13'},
            {'name':'Lê Huy12','id':'14'}
        ]
    }

    clickMe = (items)=>{
        alert('You Are '+items.name);
    }
                                                                                                                                                                                                                                                         
  render() {
      console.log('1');
     return (                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
      <View>
         
            <ScrollView>
                {
                    this.state.names.map((items,index) => (
                        <TouchableOpacity onPress={()=>this.clickMe(items)}>
                            <View key={items.id} style={styles.item}  >
                                <Text>{items.name}</Text>
                            </View> 
                            </TouchableOpacity>
                    ))
                }
            </ScrollView>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
    item:{
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        padding:30,
        margin:2,
        borderColor: '#1E90FF',
        borderWidth: 1,
        backgroundColor:'#1E90FF'
    }
})

export default Scroll;
