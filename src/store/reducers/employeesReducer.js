import employees from '../data/employees.json';
import { ADD_EMPLOYEE, EDIT_EMPLOYEE } from '../constants';

const initialState = {
  employees,
};

export default function employeesReducer(state = initialState, action) {
  switch (action.type) {
    case EDIT_EMPLOYEE: {
      const employeesNow = state.employees.map((employee) => {
        if (employee.id === action.payload.id) {
          return action.payload;
        }
        return employee;
      });
      return { ...state, employees: employeesNow };
    }
    case ADD_EMPLOYEE: {
      console.log(action.payload);
      return {
        ...state,
        employees: [
          ...state.employees,
          { ...action.payload, id: Math.floor(Math.random() * 1000) },
        ],
      };
    }
    default:
      return state;
  }
}
