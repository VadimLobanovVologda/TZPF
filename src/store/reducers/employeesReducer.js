import employees from '../data/employees.json';
import {
  ADD_EMPLOYEE, EDIT_EMPLOYEE, HIDE_MODAL, SHOW_MODAL,
} from '../constants';

const initialState = {
  employees,
  modal: {
    text: '',
    display: false,
  },
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
      return {
        ...state,
        employees: [
          ...state.employees,
          { ...action.payload, id: Math.floor(Math.random() * 1000) },
        ],
      };
    }
    case SHOW_MODAL: {
      return {
        ...state,
        modal: { ...state.modal, display: !state.modal.display, text: action.payload },
      };
    }
    case HIDE_MODAL: {
      return {
        ...state,
        modal: { ...state.modal, display: !state.modal.display, text: '' },
      };
    }
    default:
      return state;
  }
}
