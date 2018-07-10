import axios from "axios";
import setAuthToken from "../utils/setAuthToken"
import jwt_decode from "jwt-decode"
import { SET_CURRENT_USER  } from "./types";
//import { GET_ERRORS  } from "./types";  add to above with set_current_user

//Registers User
export const  registerUser= userData => dispatch => {
    axios
    .post("/api/signup", userData)
    .then(res => console.log(res.data))
    .catch(err => 
        dispatch({
            //type: GET_ERRORS,   
            //payload: err.response.data *WORK ON ERRORS IN TYPES*
        })
    );
};

//LOGIN-get User Token

export const loginUser = userData => dispatch => {
    axios.post("api/login", userData)
    .then(res => {
        console.log();
        //save to localStorage
        const { token } = res.data;
        //set token to ls
        localStorage.setItem("jwtToken", token);
        //set token to Auth header
        setAuthToken(token);
        //Decodes token to get the user data that's logged in
        const decoded = jwt_decode (token)
        //set current user
        dispatch(setCurrentUser(decoded))
    })
    .catch(err =>  
        console.log(err)
        // dispatch({
        //     //type: GET_ERRORS,   
        //     //payload: err.response.data *WORK ON ERRORS IN TYPES*
        // })
    )
};

//set logged in user
export const setCurrentUser = (decoded) => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    }
}


// Log user out
export const logoutUser = () => dispatch => {
    // Remove token from localStorage
    localStorage.removeItem('jwtToken');
    // Remove auth header for future requests
    setAuthToken(false);
    // Set current user to {} which will set isAuthenticated to false
    dispatch(setCurrentUser({}));
  };