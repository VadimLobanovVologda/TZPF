import { EDIT_EMPLOYEE } from '../constants';

export const editEmployee = (employee) => ({
  type: EDIT_EMPLOYEE,
  payload: employee,
});
