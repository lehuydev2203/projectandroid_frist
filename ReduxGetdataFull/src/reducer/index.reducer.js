import {Fetching,Fetch_Ok,Fetch_Error} from '../Action/index.action'

export default function reducer (state={} ,action){
    switch (action.type) {

        case Fetching :
            return state;

        case Fetch_Ok:
            console.log('fetch reducer '+ "index.reducer row 8");
            return {
                ...state,
                posts:action.payload
            };

        case Fetch_Error:
            console.log('fetch error'+ "index.reducer row 14");
            return {
                ...state,
                posts:action.payload
            };

        default:
            return state;
    }
}

