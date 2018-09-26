export const Fetching = "Fetching";
export const Fetch_Ok = "Fetch_Ok";
export const Fetch_Error = "Fetch_Error";

export function dataFetching (){
    return{
        type: Fetching
    }
}

export function dataFetch_Ok (payload){
    console.log('fetch reducer '+ "index.action row 12");
    return{
        type: Fetch_Ok,
        payload
    }

}
export function dataFetch_Error (error){
    return {
        type: Fetch_Error,
        error
    }
}