import React, {Component} from 'react';
import {FETCH_FAIL,FETCH_OK,FETCHING} from "../action/types";

const DETAIL_STATE={
    data:[],
    isFetching:false,
    dataFetched:"false",
    error:false,
};
export default (state = DETAIL_STATE,action)=>{
    switch (action.type){
        case FETCHING:
            return{
                isFetching: true,
                data:[],
                ...state
            };

        case FETCH_OK:
            return {
                ...state,
                data:action.payload,
                isFetching:false
            };

        case FETCH_FAIL :
            return{
                ...state,
                isFetching:false,
                error:true
            }

    }
    return state;
}