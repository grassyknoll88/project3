import axios from "axios";

const setAuthToken = token => {
    if(token){
        //appy to every request
        axios.defaults.headers.common["Authorization"] = token;

    } else {
        //delete auth header
        delete axios.defaults.headers.common["Auhorization"]
    }
}

export default setAuthToken;