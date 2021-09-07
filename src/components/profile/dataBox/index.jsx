import React, { useState } from 'react';
import { maskPhone } from 'helpers';
import styles from './dataBox.scss';

export default ({ dataEmployee }) => {
  const [employee, setEmployee] = useState(dataEmployee);
  const [edit, setEdit] = useState(false);

  const changeForm = (event) => {
    if (event.target.name === 'phone') {
      const val = maskPhone(event);
      setEmployee({ ...employee, phone: val });
    }
  };

  const editForm = () => {
    setEdit(!edit);
  };

  return (
    <div className={styles.dataBox}>
      <form className="dataBoxContent">
        <div className="edit-btn">
          {!edit ? <input type="button" value="Редактировать профиль" onClick={editForm} /> : null}
        </div>
        <label htmlFor="nameEmployee">
          ФИО:
          <input
            type="text"
            name="name"
            id="nameEmployee"
            value={employee.name}
            onChange={changeForm}
            disabled={!edit}
          />
        </label>

        <label htmlFor="nameEmployee">
          Телефон:
          <input
            type="tel"
            name="phone"
            id="phoneEmployee"
            value={employee.phone}
            onChange={changeForm}
            disabled={!edit}
          />
        </label>

        <label htmlFor="birthdayEmployee">
          Дата рождения:
          <input
            type="text"
            name="birthday"
            id="birthdayEmployee"
            value={employee.birthday}
            onChange={changeForm}
            disabled={!edit}
          />
        </label>

        <label htmlFor="roleEmployee">
          Должность:
          <select id="roleEmployee" value={employee.role} required disabled={!edit}>
            <option value="none">Выбрать</option>
            <option value="waiter">Официант</option>
            <option value="driver">Водитель</option>
            <option value="cook">Повар</option>
          </select>
        </label>

        <label htmlFor="isArchiveEmployee">
          Статус:
          {' '}
          {String(employee.isArchive)}
          <span>
            <input
              type="checkbox"
              name="isArchive"
              id="isArchiveEmployee"
              checked={employee.isArchive}
              onChange={changeForm}
              disabled={!edit}
            />
            {' '}
            - &quot;В архиве&quot;
          </span>
        </label>

        <div className="saveBox">
          {edit ? <input type="button" value="Отмена" onClick={editForm} /> : null}
          {edit ? <input type="button" value="Сохранить" onClick={editForm} /> : null}
        </div>
      </form>
    </div>
  );
};
