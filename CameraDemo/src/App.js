import React ,{Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Screen} from '@shoutem/ui';
import Camera from 'react-native-camera';

class Cameraview extends Component{
render(){
    return(
        <View style={styles.container}>
            <Camera
            ref={(cam)=>{
                this.camera=cam
            }}
            style={styles.view}
            aspect={Camera.constants.Aspect.fill}
            >
            <Text style={styles.capture}
            onPress={this.takePicture.bind(this)}
            >
                [CAPTURE_IMAGE]
            </Text>
            </Camera>
        </View>
    );
}
takePicture() {
    const options = {}
    this.camera.capture({metadata:options}).then((data)=>{
        console.log(data)
    }).catch((error)=>{
        console.log(error)
    })
}
}



const styles=StyleSheet.create({
    container:{
        flex:1,
        flexDirection: 'row'
    },
    view:{
        flex:1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    capture:{
        flex:0,
        backgroundColor:'steelblue',
        borderRadius:10,
        color:'red',
        padding:15,
        margin:45
    }
});

export default Cameraview;