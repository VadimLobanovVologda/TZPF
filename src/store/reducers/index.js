/* eslint-disable no-underscore-dangle */
import { combineReducers, createStore } from 'redux';
import employeesReducer from './employeesReducer';
import formReducer from './formReducer';

const rootReducer = combineReducers({
  employees: employeesReducer,
  form: formReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
