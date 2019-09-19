import {
  planCreate,
  planFetchSuccess,
  planNameChanged,
  planDelete
} from './types';
import axios from 'axios';

export const fetchPlans = token => {
  return dispatch => {
    axios
      .get(
        'http://nodeangular-env-1.unjnyp6bhi.us-east-2.elasticbeanstalk.com/api/plans',
        { headers: { Authorization: 'Bearer ' + token } }
      )
      .then(res => {
        dispatch({ type: planFetchSuccess, payload: res.data });
      })
      .catch(err => console.log(err));
  };
};

export const makeNewPlan = (plan, token) => {
  return dispatch => {
    axios
      .post(
        'http://nodeangular-env-1.unjnyp6bhi.us-east-2.elasticbeanstalk.com/api/plans',
        plan,
        { headers: { Authorization: 'Bearer ' + token } }
      )
      .then(() => {
        dispatch({ type: planCreate });
        fetchPlans(token)(dispatch);
      })
      .catch(err => console.log(err));
  };
};

export const nameChanged = text => {
  return {
    type: planNameChanged,
    payload: text,
  };
};

export const deletePlan = (planId, token) => {
  return dispatch => {
    axios
      .delete(
        'http://nodeangular-env-1.unjnyp6bhi.us-east-2.elasticbeanstalk.com/api/plans/delete/' +
          planId,
        { headers: { Authorization: 'Bearer ' + token } }
      )
      .then(() => {
        dispatch({ type: planDelete });
        fetchPlans(token)(dispatch);
      })
      .catch(err => console.log(err));
  };
};


