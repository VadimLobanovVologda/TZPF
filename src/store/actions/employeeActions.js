import {
  EDIT_EMPLOYEE, ADD_EMPLOYEE, SHOW_MODAL, HIDE_MODAL,
} from '../constants';

export const editEmployee = (employee) => ({
  type: EDIT_EMPLOYEE,
  payload: employee,
});

export const addEmployee = (employee) => ({
  type: ADD_EMPLOYEE,
  payload: employee,
});

export const showModal = (text) => ({
  type: SHOW_MODAL,
  payload: text,
});
export const hideModal = () => ({
  type: HIDE_MODAL,
  payload: false,
});
