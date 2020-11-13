import axios from 'axios';
import { LOGIN_USER, LOGOUT_USER, SIGNUP_USER } from "../types/sessionTypes"




// export const changeLoggedIn = (newValue) => ({
//   type: LOGIN_USER,
//   newValue: newValue,
// });


export const loginUser = (email, password) => (dispatch) => {
  // console.log('email: ', email)
  // console.log('pass: ', password)
  axios.post("http://localhost:3001/api/v1/users/sign_in", 
  {
    email: email,
    password: password
  },
//{withCredentials: true}
  )
  .then(response => {
    //console.log("res from login", response);
    if (response.status === 200)
    {
      localStorage.setItem("user", JSON.stringify(response.data))
      console.log("response: ", response.data)
      //setAuthToken=(response.data.authentication_token)
      return dispatch({type: LOGIN_USER,payload: response.data })
    }
  })
  .catch(error => {
    console.log("login error", error);
  });
  
}

export const logoutUser = (email, token) => (dispatch) => {
  const headers = {
    'X-User-Email': email,
    'X-User-Token': token
  }
  axios.delete("http://localhost:3001/api/v1/users/sign_out",  {
    headers: headers
  })
  .then(response => {
    localStorage.removeItem('user');
    //console.log("response: ", response.data)
    return dispatch({type: LOGOUT_USER })
  })
  .catch(error => {
    console.log("logout error", error);
  });
}

export const signupUser = (email, password, password_confirmation) => (dispatch) => {
  // console.log('email: ', email)
  // console.log('pass: ', password)
  axios.post("http://localhost:3001/api/v1/users", 
  {
    user:{
      email: email,
      password: password,
      password_confirmation: password_confirmation
    }
  },
//{withCredentials: true}
  )
  .then(response => {
    //console.log("res from login", response);
    if (response.status === 201)
    {
      localStorage.setItem("user", JSON.stringify(response.data))
      console.log("response: ", response.data)
      //setAuthToken=(response.data.authentication_token)
      return dispatch({type: SIGNUP_USER,payload: response.data })
    }
  })
  .catch(error => {
    console.log("signup error", error);
  });
  
}

