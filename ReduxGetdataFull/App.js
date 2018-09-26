import React ,{Component} from 'react';
import { ScrollView }from 'react-native';
import {Provider} from "react-redux";
import ReduxThunk from 'redux-thunk';
import {createStore,applyMiddleware} from 'redux';
import reducer from './src/reducer/index.reducer';
import Container ,{ App } from './src/index.app'

//create store
const store = createStore(
    reducer,
    applyMiddleware(ReduxThunk)
);

//create smart Component
export default class Root extends Component<{}>{
    render() {
        console.disableYellowBox = true;
        return (
            <Provider store={store}>
                <ScrollView>
                  <Container/>
                </ScrollView>
            </Provider>
        );
    }
}
