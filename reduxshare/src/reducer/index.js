import {appState} from '../state/index';
import {ADD,SUB} from '../action/index';

export const numberReducer=(state=appSate , action)=>{
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
export const errorreducer=(state=appSate,action)=>{

    switch (action.type) {
        case 'LESS_THAN_ZERO':
            state={
                ...state,
                errorMsg:' Number can not bt less than zero '
            }
    }

    return state
};