import React ,{Component} from 'react';
import {Text , View} from 'react-native' ;
import {Provider} from 'react-redux';
import Datalist from './Datalist';
    
export default class App extends  Component{
    render(){
        console.log("app.js");
        return(
            <Provider store={}>
                <View>
                    <Datalist/>
                </View>
            </Provider>

        );
    }
}