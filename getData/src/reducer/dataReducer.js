import { FETCH_OK , FETCH_FAIL ,FETCHING } from '../action/Actionfetch';

const initialState= {
    data : [],
    loading : false,
    errors : null
};

export default function dataReducer( state =  initialState , action){
    switch (action.type) {
        case FETCHING :
            return {
                ...state,
                loading: true,
                errors: null
            };
        case FETCH_OK :
            return {
                ...state,
                loading: false,
                data : action.payload.data
            };
        case FETCH_FAIL:
            return {
                ...state,
                loading:false,
                errors : action.payload.errors,
                data :[]
            };
        default :
            return state;
    }
}