import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import surveysReducer from './surveysReducer';

export default combineReducers({
  //auth piece of state is being produced by the auth reducer
  auth: authReducer,
  form: reduxForm,
  surveys: surveysReducer
});
