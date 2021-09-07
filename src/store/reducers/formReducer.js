import { CHANGE_FILTER_STATUS, CHANGE_FILTER_ROLE } from '../constants';

const initialState = {
  role: 'all',
  status: false,
};

export default function tableReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_FILTER_ROLE:
      return { ...state, role: action.payload };
    case CHANGE_FILTER_STATUS:
      return { ...state, status: action.payload };

    default:
      return state;
  }
}
