import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import ReactInputDateMask from 'react-input-date-mask';
import { useDispatch } from 'react-redux';
import { editEmployee, addEmployee } from 'actions/employeeActions';
import styles from './dataBox.scss';

export default ({ dataEmployee, actionUrl }) => {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(actionUrl === 'create');
  const [birthday, setBirthday] = useState(dataEmployee.birthday);
  const [name, setName] = useState(dataEmployee.name);
  const [phone, setPhone] = useState(dataEmployee.phone);
  const [role, setRole] = useState(dataEmployee.role);
  const [isArchive, setIsArchive] = useState(dataEmployee.isArchive);

  const editForm = (e) => {
    const nameEl = e.target.name;
    setEdit(!edit);
    if (nameEl === 'save') {
      const newEmployee = {
        ...dataEmployee,
        name,
        phone,
        role,
        isArchive,
        birthday,
      };
      dispatch(editEmployee(newEmployee));
      return;
    }
    if (nameEl === 'create') {
      const newEmployee = {
        ...dataEmployee,
        name,
        phone,
        role,
        isArchive,
        birthday,
      };
      dispatch(addEmployee(newEmployee));
      return;
    }
    setBirthday(dataEmployee.birthday);
    setName(dataEmployee.name);
    setPhone(dataEmployee.phone);
    setRole(dataEmployee.role);
    setIsArchive(dataEmployee.isArchive);
  };

  return (
    <div className={styles.dataBox}>
      <form className="dataBoxContent">
        <div className="edit-btn">
          {!edit && actionUrl !== 'create' ? (
            <input type="button" value="Редактировать профиль" onClick={editForm} />
          ) : null}
        </div>
        <label htmlFor="nameEmployee">
          ФИО:
          <input
            type="text"
            name="name"
            id="nameEmployee"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={!edit}
          />
        </label>

        <label htmlFor="phoneEmployee">
          Телефон:
          <InputMask
            id="phoneEmployee"
            name="phone"
            mask="+7\ (999) 999 99 99"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            disabled={!edit}
          />
        </label>

        <label htmlFor="birthdayEmployee">
          Дата рождения:
          <ReactInputDateMask
            mask="dd.mm.yyyy"
            showMaskOnFocus
            id="birthdayEmployee"
            value={birthday}
            onKeyUp={(e) => setBirthday(e.target.value)}
            showMaskOnHover
            disabled={!edit}
          />
        </label>

        <label htmlFor="roleEmployee">
          Должность:
          <select
            id="roleEmployee"
            value={role}
            disabled={!edit}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="waiter">Официант</option>
            <option value="driver">Водитель</option>
            <option value="cook">Повар</option>
          </select>
        </label>

        <label htmlFor="isArchiveEmployee">
          Статус:
          {' '}
          <span>
            <input
              type="checkbox"
              name="isArchive"
              id="isArchiveEmployee"
              checked={isArchive}
              onChange={(e) => setIsArchive(e.target.checked)}
              disabled={!edit}
            />
            {' '}
            - &quot;В архиве&quot;
          </span>
        </label>

        <div className="saveBox">
          {edit ? <input type="button" name="cancel" value="Отмена" onClick={editForm} /> : null}
          {edit ? (
            <input
              type="button"
              name={actionUrl === 'create' ? 'create' : 'save'}
              value="Сохранить"
              onClick={editForm}
            />
          ) : null}
        </div>
      </form>
    </div>
  );
};
