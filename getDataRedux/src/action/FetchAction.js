export const Fetching = "Fetching";
export const Fetch_OK = "Fetch_Ok";
export const Fetch_Error = "Fetch_Error";

export const DataFetching = () => ({
    type: Fetching
});

export const DataFetch_ok = data => ({
    type: Fetch_OK,
    payload : {data}
});

export const DataFetch_Fail = errors => ({
    type: Fetch_Error,
    payload : {errors}
});

export default function FetchData(){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "text/plain");
    myHeaders.append("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3N1ZXJfb2ZfdGhlX3Rva2VuIjoiRGF2aWQiLCJ1c2VyX2RlZmF1bHQiOjEsInN0YXR1cyI6InN1Y2Nlc3MiLCJkYXRlIjoxNTMzODEyMjU5fQ.3K_zp6ANFcqwNuu3p055W1yBGD02Z7DN8FmymPUu5mo");
    var myInit = { method: 'GET',
        headers: myHeaders,
        mode: 'cors',
        cache: 'default' };

    var myRequest = new Request('http://iwantoutsource.com/eform_sign/list', myInit);

    return dispatch => {
        dispatch(DataFetching());
        return fetch(myRequest)
            .then(handleError)
            .then(response=>response.json())
            .then( json => { dispatch ( DataFetch_ok (json.data));
                return json.data;
            })
            .catch( errors => dispatch(DataFetch_Fail(errors)))

}

}

function handleError(response){
    console.log("handleError");
    if(!response.ok){
        throw  Error (response.statusText);
    }
    return response ;
}