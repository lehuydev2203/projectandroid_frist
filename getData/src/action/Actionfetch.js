export function Getdata (){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "text/plain");
    myHeaders.append("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3N1ZXJfb2ZfdGhlX3Rva2VuIjoiRGF2aWQiLCJ1c2VyX2RlZmF1bHQiOjEsInN0YXR1cyI6InN1Y2Nlc3MiLCJkYXRlIjoxNTMzODEyMjU5fQ.3K_zp6ANFcqwNuu3p055W1yBGD02Z7DN8FmymPUu5mo");
    var myInit = { method: 'GET',
        headers: myHeaders,
        mode: 'cors',
        cache: 'default' };

    var myRequest = new Request('http://iwantoutsource.com/eform_sign/list', myInit);
    console.log("get infor");

    return dispatch =>{
        dispatch( DataFetching());
        return fetch(myRequest)
            .then(handleError)

            .then(res => res.json())
            .then(json => { dispatch( DataFetchOk ( json.data )); return json.data;
            })

            // .then(function(response) {return response.json();})
            // .then((data) => this.setState({ data }))


            .catch( errors => dispatch(DataFetchFail(errors)))
    };
    console.log("request finsiht");
}

function handleError (response){
    console.log("handleError");
    if(!response.ok){
        throw Error (response.statusText);
    }
    return response;
}

export const FETCH_OK = "FETCH_OK";
export const FETCHING = "FETCHING";
export const FETCH_FAIL = "FETCH_FAIL";

export const DataFetchOk = data => ({
    type: FETCH_OK,
    payload: { data }
});
export const DataFetching = () => ({
    type: FETCHING
});
export const DataFetchFail = errors => ({
    type: FETCH_FAIL,
    payload: { errors }
});