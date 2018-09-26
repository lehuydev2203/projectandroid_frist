import React from 'react';
import {View , Text ,FlatList } from 'react-native';
import {createStore,applyMiddleware} from 'redux';
import {Provider,connect} from 'react-redux';
import ReduxThunk from 'redux-thunk';

//action
function fetchPostsRequest(){
    return {
        type: "FETCH_REQUEST"
    }
}

function fetchPostsSuccess(payload) {
    return {
        type: "FETCH_SUCCESS",
        payload
    }
}

function fetchPostsError() {
    return {
        type: "FETCH_ERROR"
    }
}

//reducer
const reducer = (state = {}, action) => {
    switch (action.type) {
        case "FETCH_REQUEST":
            return state;
        case "FETCH_SUCCESS":
            return {
                ...state,
                posts: action.payload};
        default:
            return state;
    }
}

function fetchPostsWithRedux() {
    return (dispatch) => {
        dispatch(fetchPostsRequest());
        return fetchPosts().then(([response, json]) =>{
            if(response.status === 200){
                dispatch(fetchPostsSuccess(json))
            }
            else{
                dispatch(fetchPostsError())
            }
        })
    }
}

function fetchPosts() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "text/plain");
    myHeaders.append("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3N1ZXJfb2ZfdGhlX3Rva2VuIjoiRGF2aWQiLCJ1c2VyX2RlZmF1bHQiOjEsInN0YXR1cyI6InN1Y2Nlc3MiLCJkYXRlIjoxNTMzODEyMjU5fQ.3K_zp6ANFcqwNuu3p055W1yBGD02Z7DN8FmymPUu5mo");
    var myInit = { method: 'GET',
        headers: myHeaders,
        mode: 'cors',
        cache: 'default' };

    var myRequest = new Request('http://iwantoutsource.com/eform_sign/list', myInit);

    return fetch(myRequest)
        .then( response => Promise.all([response, response.json()]));
}

class App extends React.Component {
    componentDidMount(){
        this.props.fetchPostsWithRedux()
    }
    render(){
        return (
            <View>

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
    return {
        posts: state.posts
    }
}


let Container = connect(mapStateToProps, {fetchPostsWithRedux})(App);


//root
const store = createStore(
    reducer,
    applyMiddleware(ReduxThunk)
);

class Root extends React.Component {
render(){
    return(
        <Provider store={store}>
            <Container/>
        </Provider>
    );
}
}
export default Root;