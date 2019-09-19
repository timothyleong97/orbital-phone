import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import PlanReducer from './PlanReducer';
import ModuleReducer from './ModuleReducer';

export default combineReducers({
  auth: AuthReducer,
  plans: PlanReducer,
  edits: ModuleReducer
});
