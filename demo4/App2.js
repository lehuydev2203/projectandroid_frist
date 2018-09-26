//import lib
import React ,{Component} from 'react';
import {View,Text} from 'react-native'


//import component


class App extends Component {

    componentDidMount(){
        fetch('http://iwantoutsource.com/eform_sign/list',{
            method:'GET',
            headers:{
                "Content-Type": "application/json; charset=utf-8",
            },
            body:JSON.stringify(data),
        })
            .then(function(response) {
                return response.json();
            })
            .then(function(myJson) {
                console.log(JSON.stringify(myJson));
            });
    }

    render(){
        return (
            <View>
                <Text>asdasdasd</Text>
            </View>
        );
    }
}

export default App;
