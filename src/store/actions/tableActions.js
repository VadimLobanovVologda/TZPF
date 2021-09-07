import { CHANGE_FILTER_ROLE, CHANGE_FILTER_STATUS } from '../constants';

export const changeFilterRole = (role) => ({
  type: CHANGE_FILTER_ROLE,
  payload: role,
});
export const changeFilterStatus = (status) => ({
  type: CHANGE_FILTER_STATUS,
  payload: status,
});
