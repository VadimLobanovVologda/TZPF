import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getElemArr, isNumber } from 'helpers';
import SVGClose from 'images/close_profile.svg';
import { NavLink } from 'react-router-dom';
import styles from './profile.scss';
import PhotoBox from './photoBox';
import DataBox from './dataBox';

const defaultDataEmployee = {
  name: '',
  isArchive: false,
  role: 'cook',
  phone: '',
  birthday: '',
};

export default () => {
  const { action, id } = useParams();
  const isPageCreate = action === 'create' && !id;
  const { employees } = useSelector((state) => state.employees);
  const isPageEdit = action === 'edit' && isNumber(Number(id));
  const errorPageUrd = !isPageEdit && !isPageCreate;
  if (errorPageUrd) {
    return (
      <main className={styles.profile}>
        <div className="errorUrl">Такой страницы не существует.</div>
      </main>
    );
  }
  const dataEmployee = isPageEdit ? getElemArr(employees, id) : defaultDataEmployee;
  return (
    <main className={styles.profile}>
      <div className="profileContent">
        <div className="close-btn">
          <NavLink to="/">
            <img src={SVGClose} alt="Назад" />
          </NavLink>
        </div>
        <PhotoBox />
        <DataBox dataEmployee={dataEmployee} actionUrl={action} />
      </div>
    </main>
  );
};
