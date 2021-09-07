import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilterRole, changeFilterStatus } from 'actions/tableActions';
import styles from './formFilter.scss';

export default () => {
  const { role, status } = useSelector((state) => state.form);
  const dispatch = useDispatch();

  const changeRole = (event) => {
    const nameElem = event.target.name;
    if (nameElem === 'role') {
      dispatch(changeFilterRole(event.target.value));
      return;
    }
    dispatch(changeFilterStatus(event.target.checked));
  };

  return (
    <div className={styles.formFilter}>
      <form className="form">
        <label htmlFor="roleFilter">
          Должность:
          <select name="role" value={role} onChange={changeRole} id="roleFilter">
            <option value="all">Все</option>
            <option value="cook">Повар</option>
            <option value="waiter">Официант</option>
            <option value="driver">Водитель</option>
          </select>
        </label>

        <label htmlFor="inArchiveFilter">
          Статус:
          <input
            name="status"
            type="checkbox"
            onChange={changeRole}
            id="inArchiveFilter"
            checked={status}
          />
          {' '}
          - &quot;В архиве&quot;
        </label>
      </form>
    </div>
  );
};
