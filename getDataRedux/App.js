import React ,{Component} from 'react';
import {Text , View} from 'react-native' ;
import {Provider} from 'react-redux';

//store
import {createStore} from 'redux';
import {DataReducer} from  './src/reducer/index.reducer';
import ListData from './src/containner/index.container';
import AppState from './src/state/index.state';

// const reducer = DataReducer;
const store = createStore(DataReducer,AppState);

export default class App extends  Component{
    render(){
        return(
            <Provider store={store}>
                <View>
                    <ListData/>
                </View>
            </Provider>

        );
    }
}