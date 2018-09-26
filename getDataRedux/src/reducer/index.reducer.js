import StateApp from '../state/index.state';
import {Fetching,Fetch_OK,Fetch_Error} from '../action/FetchAction';

export function DataReducer ( state = StateApp , action ){

    switch (action.type) {

        case Fetching :
            return {
                ...state,
                loading: true ,
                errors :null
            };
        case Fetch_OK :
            return {
                ...state,
                loading: false,
                data : action.payload.data
            };
        case Fetch_Error :
            return {
                ...state,
                loading:false,
                errors: action.payload.errors,
                data : []
            };
        default :
            return state;
    }

}

