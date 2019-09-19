import {
  moduleSelected,
  planFetched,
  planUpdate,
  toDelete
} from '../actions/types';

const INITIAL_STATE = {
  module: null,
  plan: { modules: [] },
  deleteAt: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case moduleSelected:
      return { ...state, module: action.payload };
    case planFetched:
      return { ...state, plan: action.payload };
    case toDelete:
      return { ...state, deleteAt: action.payload };
    case planUpdate:
      return { ...state, deleteAt: null };
    default:
      return state;
  }
};
