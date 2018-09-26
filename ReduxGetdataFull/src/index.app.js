import React,{Component} from 'react';
import {View, Text , FlatList } from 'react-native';
import {connect} from 'react-redux';
import {dataFetch_Error,dataFetch_Ok,dataFetching} from './Action/index.action';

function dataFetchWith(){
    return (dispatch)=>{
        dispatch(dataFetching());
        return fetchData().then(([response,json])=>{
            if(response.status===200){
                dispatch(dataFetch_Ok(json));
                console.log('fetch ok '+" index.app row 12");
            }
            else{
                console.log('fetch error' +" index.app row 15");
                dispatch(dataFetch_Error())
            }
        })
    }
}

function fetchData(){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "text/plain");
    myHeaders.append("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3N1ZXJfb2ZfdGhlX3Rva2VuIjoiRGF2aWQiLCJ1c2VyX2RlZmF1bHQiOjEsInN0YXR1cyI6InN1Y2Nlc3MiLCJkYXRlIjoxNTMzODEyMjU5fQ.3K_zp6ANFcqwNuu3p055W1yBGD02Z7DN8FmymPUu5mo");
    let myInit = { method: 'GET',
        headers: myHeaders,
        mode: 'cors',
        cache: 'default' };

    let myRequest = new Request('http://iwantoutsource.com/eform_sign/list', myInit);
    console.log('fetch funct get data' +" index.app row 32");
    return fetch(myRequest)

        .then( response => Promise.all([response, response.json()]));

}


//create dump component

class App extends Component {
    componentDidMount(){
        this.props.dataFetchWith()
    }
    render(){
        console.log(this.props.posts);
        return (
            <View>
                <Text>asdasd</Text>
                {
                    this.props.posts ?
                        <View>
                            <FlatList
                                data={this.props.posts.data}
                                renderItem={({item}) =>
                                    <View style={{flex: 1,backgroundColor:'cyan', marginBottom: 10}}>
                                        <Text>{item.image_id}</Text>
                                        <Text>{item.image_url}</Text>
                                        <Text>{item.last_update_date}</Text>
                                    </View>
                                }
                            />
                        </View> :
                        <Text>no value</Text>
                }
            </View>
        )
    }
}

function mapStateToProps(state){
    console.log('fetch map State to Props' +" index.app row 74");
    console.log(state);

    return{
        posts:state.posts
    }
}

export default connect(mapStateToProps,{dataFetchWith})(App);