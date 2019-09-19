import {
  planCreate,
  planFetchSuccess,
  planNameChanged,
  planDelete
} from '../actions/types';

const INITIAL_STATE = { arr: [], planName: '' };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case planCreate:
      return { ...state, planName: '' };
    case planFetchSuccess:
      return { ...state, arr: action.payload };
    case planNameChanged:
      return { ...state, planName: action.payload };
    case planDelete:
      return { ...state };
    default:
      return state;
  }
};
