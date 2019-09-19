import {
  email_changed,
  password_changed,
  loggingIn,
  loginFail,
  loginSuccess
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  token: '',
  error: '',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case email_changed:
      return { ...state, email: action.payload };
    case password_changed:
      return { ...state, password: action.payload };
    case loginSuccess:
      return {
        ...INITIAL_STATE,
        user: action.payload
      };
    case loginFail:
      return { ...state, error: 'Authentication Failed', loading: false };
    case loggingIn:
      return { ...state, loading: true, error: '' };
    default:
      return state;
  }
};
