import employees from '../data/employees.json';
import { ADD_EMPLOYEE } from '../constants';
const initialState = {
  employees,
};

export default function employeesReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_EMPLOYEE:

      break;

    default:
      return state
  }
}
