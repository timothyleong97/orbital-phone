import { moduleSelected, planFetched, planUpdate, toDelete } from './types';
import axios from 'axios';

export const moduleChosen = ({ id, name }) => {
  return { type: moduleSelected, payload: { id, name } };
};

export const getPlan = (id, token) => {
  return dispatch => {
    axios
      .get(
        'http://nodeangular-env-1.unjnyp6bhi.us-east-2.elasticbeanstalk.com/api/plans/' +
          id,
        { headers: { Authorization: 'Bearer ' + token } }
      )
      .then(plan => {
        dispatch({ type: planFetched, payload: plan.data });
      })
      .catch(error => {
        console.log(error);
      });
  };
};

//update one plan
export const updatePlan = (plan, token) => {
  return dispatch => {
    axios
      .put(
        'http://nodeangular-env-1.unjnyp6bhi.us-east-2.elasticbeanstalk.com/api/plans/update/' +
          plan._id,
        plan,
        { headers: { Authorization: 'Bearer ' + token } }
      )
      .then(() => {
        dispatch({ type: planUpdate });
        getPlan(plan.planId, token)(dispatch);
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const sendDeletePosition = (semester, index) => {
  return {
    type: toDelete,
    payload: {
      semester,
      index
    }
  };
};
