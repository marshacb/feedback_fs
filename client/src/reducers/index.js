import { combineReducers } from 'redux';
import authReducer from './authReducer';

export default combineReducers({
  //auth piece of state is being produced by the auth reducer
  auth: authReducer
});
