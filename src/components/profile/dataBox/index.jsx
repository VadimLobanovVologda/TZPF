import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import ReactInputDateMask from 'react-input-date-mask';
import { useDispatch } from 'react-redux';
import { editEmployee, addEmployee } from 'actions/employeeActions';
import { useHistory } from 'react-router';
import styles from './dataBox.scss';
import { showModal } from '../../../store/actions/employeeActions';

export default ({ dataEmployee, actionUrl }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [edit, setEdit] = useState(actionUrl === 'create');
  const [birthday, setBirthday] = useState(dataEmployee.birthday);
  const [name, setName] = useState(dataEmployee.name);
  const [phone, setPhone] = useState(dataEmployee.phone);
  const [role, setRole] = useState(dataEmployee.role);
  const [isArchive, setIsArchive] = useState(dataEmployee.isArchive);

  const testEmptyInput = () => birthday && name && phone && role;

  const editForm = (e) => {
    const nameEl = e.target.name;
    const complete = testEmptyInput();

    if (nameEl === 'save') {
      setEdit(!edit);
      if (!complete) {
        dispatch(
          showModal(
            `${name ? '' : 'Имя,'} ${phone ? '' : 'Телефон,'} ${role ? '' : 'Должность,'} ${
              birthday ? '' : 'Дата рождения,'
            }`,
          ),
        );
        return;
      }
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
      if (!complete) {
        dispatch(
          showModal(
            `${name ? '' : 'Имя,'} ${phone ? '' : 'Телефон,'} ${role ? '' : 'Должность,'} ${
              birthday ? '' : 'Дата рождения,'
            }`,
          ),
        );
        return;
      }
      setEdit(!edit);
      const newEmployee = {
        ...dataEmployee,
        name,
        phone,
        role,
        isArchive,
        birthday,
      };
      dispatch(addEmployee(newEmployee));
      history.push('/');
    }
    setEdit(!edit);

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
            required
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
            required
          />
        </label>

        <label htmlFor="birthdayEmployee">
          Дата рождения:
          <ReactInputDateMask
            mask="dd.mm.yyyy"
            showMaskOnFocus
            id="birthdayEmployee"
            value={birthday}
            onChange={(value) => {
              setBirthday(value);
            }}
            showMaskOnHover
            disabled={!edit}
            required
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
              required
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
              value={actionUrl === 'create' ? 'Создать' : 'Сохранить'}
              onClick={editForm}
              required
            />
          ) : null}
        </div>
      </form>
    </div>
  );
};
