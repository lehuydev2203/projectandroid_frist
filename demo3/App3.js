import React ,{Component} from 'react';
import {View,Text} from 'react-native';
import {createStore,applyMiddleware, combineReducers} from 'redux';

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
    console.log('bước 4' , store.getState());
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
const store = createStore(reducers,applyMiddleware(logger,checkinZero));

//test

store.subscribe( ()=>{
    console.log('bước 2',store.getState())
});
store.dispatch(add);
store.dispatch(sub);
store.dispatch(sub);
store.dispatch(sub);
store.dispatch(sub);
store.dispatch(sub);


class App3 extends Component{
    render(){
        return(
            <View>
                <Text>
                    redux
                </Text>
            </View>
        );
    }
}
export default App3;