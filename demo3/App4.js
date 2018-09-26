import React ,{Component} from 'react';
import {View,Text} from 'react-native';
import {createStore,applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
//State
let appSate={number:1,history:[1],errorMsg:[]};
//Action
const add={
    type:'ADD',
    value:1
}
const sub={
    type:'SUB',
    value:1
}

//Reducer
const numberReducer=(state=appSate , action)=>{
    switch (action.type) {
        case'ADD':
            const newValue=state.number+=action.value;
            state={
                ...state,
                history: [...state.history,newValue],
                number:newValue
            };
            break;
        case'SUB':
            const newVal=state.number-=action.value;
            state={
                ...state,
                history: [...state.history,newVal],
                number:newVal
            };
            break;
    }
    return state
};
const errorreducer=(state=appSate,action)=>{

    switch (action.type) {
        case 'LESS_THAN_ZERO':
            state={
                ...state,
                errorMsg:' Number can not bt less than zero '
            }
    }

    return state
};
//Middleware
const logger = store => next => action =>{
    console.log('bước 1' , store.getState());
    next(action);
    alert("bước 4 $(JSON.stringify(store.getState().number.number)) ");
    console.log('bước 4 ', store.getState().number.number);
};
const checkinZero=store=> next=> action=>{
    const currentNumber = store.getState().number.number;
    if(currentNumber == 0 ){
        next({type:"LESS_THAN_ZERO"})
    }else{
        next(action);
    }
    console.log('bước 3 ',currentNumber);
};
//Store

const reducers=combineReducers({ number:numberReducer , err:errorreducer });
const store = createStore(reducers,applyMiddleware(thunk,logger,checkinZero));

//test

store.subscribe( ()=>{
    console.log('bước 2',store.getState())
});


setTimeout(()=>store.dispatch(add),10000)
;


class App3 extends Component{
    state=store.getState().number;
    render(){

        console.log(this.state);
        return(
        <Provider>
            <View>
                <Text>
                    redux
                    {this.state.number}
                </Text>
            </View>
        </Provider>
        );
    }
}
export default App3;