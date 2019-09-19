import {
  email_changed,
  password_changed,
  loggingIn,
  loginSuccess,
  loginFail
} from './types';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';

export const emailChanged = text => {
  return {
    type: email_changed,
    payload: text,
  };
};

export const passwordChanged = text => {
  return {
    type: password_changed,
    payload: text,
  };
};

export const loginUser = ({ email, password }) => {
  return dispatch => {
    dispatch({ type: loggingIn });
    //1. send the object to http://localhost:3000/api/users/login
    //2. get back a {token: string, expiresIn: number}
    //3. TODO: set a timer in the store for triggering auto-logout
    //4. save the token to the state container
    //5. navigate user to main page
    axios
      .post(
        "http://nodeangular-env-1.unjnyp6bhi.us-east-2.elasticbeanstalk.com/api/users/login",
        {
          userId: 'df@f.com',
          password:'password',
        }
      )
      .then(({ data }) => {
        console.log('Login successful', data);
        dispatch({ type: loginSuccess, payload: data });
        Actions.main();
      })
      .catch(err => {
        console.log('Login failed', err);
        dispatch({ type: loginFail });
      });
  };
};

export const signupUser = ({ email, password }) => {
  return dispatch => {
    axios
      .post(
        "http://nodeangular-env-1.unjnyp6bhi.us-east-2.elasticbeanstalk.com/api/users/signup",
        { userId: email, password }
      )
      .then(({ data }) => {
        console.log('Signup successful', data);
        dispatch({ type: loginSuccess, payload: data });
        Actions.main();
      })
      .catch(error => {
        console.log('Login failed', error);
        dispatch({ type: loginFail });
      });
  };
};
