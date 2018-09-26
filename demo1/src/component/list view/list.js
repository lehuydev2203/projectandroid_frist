import React, { Component } from 'react';
import { View, Text ,StyleSheet, TouchableOpacity} from 'react-native';

class List extends Component {
    state={
            names:[
                {id:0,
                name:'Lê Huy'},
                {id:1,
                name:'Anh Dương'},
                {id:2,
                name:'Cát Nhung'},
                {id:3,
                name:'Ngọc Châu'},
                {id:4,
                name:'Andrew'}
            ]
        }
    
    
    alertItemsName = (item) => {
        alert("You Are "+item.name) 
    }

    render() {
        return (
            <View style={style.container}>
                {
                    this.state.names.map((item,index) => (
                        <TouchableOpacity
                        key={item.id}
                        style={style.container_list}
                        onPress={()=>this.alertItemsName(item)}>   
                                
                            <Text style={style.text}>
                                {item.name}
                            </Text>
                        </TouchableOpacity>
                    ))
                }
            </View>
        )
    }
}

const style=StyleSheet.create({
    container:{
        height:450
    },
    container_list:{
        padding: 10,
        marginTop:3,
        backgroundColor:'#1E90FF',
        alignItems: 'center',
    },
    text:{
        color:'white',
        textAlign:'center'
    }
});
export default List;
