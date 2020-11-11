//import { combineReducers } from 'redux';

import { LOGIN_USER, LOGOUT_USER } from './types';

const initialState = { user: {email:'', token:''}, loggedInStatus: '' };
const sessionReducer = ( state=initialState, action) => {
  switch (action.type) {
    case LOGIN_USER: 
      return { ...state, user: action.payload, loggedInStatus: true };
    case LOGOUT_USER:
      return { ...state, loggedInStatus: false };
    default: 
      return state;
  };
};


// const reducers = combineReducers({
//   loggedIn: sessionReducer,
// });


export default sessionReducer;




