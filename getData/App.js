//import lib
import React ,{Component} from 'react';
import {View,Text} from 'react-native'


//import component


class App extends Component {
    state={
        data:'',
        item:''
    };
    componentDidMount(){
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "text/plain");
        myHeaders.append("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3N1ZXJfb2ZfdGhlX3Rva2VuIjoiRGF2aWQiLCJ1c2VyX2RlZmF1bHQiOjEsInN0YXR1cyI6InN1Y2Nlc3MiLCJkYXRlIjoxNTMzODEyMjU5fQ.3K_zp6ANFcqwNuu3p055W1yBGD02Z7DN8FmymPUu5mo");
        var myInit = { method: 'GET',
            headers: myHeaders,
            mode: 'cors',
            cache: 'default' };

        var myRequest = new Request('http://iwantoutsource.com/eform_sign/list', myInit);

        fetch(myRequest)
            .then(function(response) {
                return response.json(); })
            .then((data) => this.setState({ data })
        );

    }

    render(){
        const image = this.state.data.data ? this.state.data.data[0].image_id : 'no value';
        const imageurl = this.state.data.data ? this.state.data.data[0].image_url : 'no value';
        const lastimage = this.state.data.data ? this.state.data.data[0].last_update_date : 'no value';
        return (
            <View>
                <FlatList
                    data={[{key: 'a'}, {key: 'b'}]}
                    renderItem={({item}) => <Text>{item.key}</Text>}
                />
                <Text>{image}</Text>
                <Text>{imageurl}</Text>
                <Text>{lastimage}</Text>
            </View>
        );
    }
}

export default App;
