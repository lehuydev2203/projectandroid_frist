import {FETCH_OK , FETCH_FAIL , FETCHING} from './types';

export function getData(){
     return {
         type:FETCHING
     }
}
export function getDataOk(data){
    return{
        type:FETCH_OK,
        payload:data
    }
}
export function getDataFail(){
  return {
      FETCH_FAIL
  }
}
export function fetchDate(){
    return(dispatch)=>{
        dispatch(getData());

    }
}
