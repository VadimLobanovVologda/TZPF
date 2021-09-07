import React from 'react';
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { getRole } from 'helpers';
import styles from './listEmployees.scss';

export default () => {
  const history = useHistory();
  const { employees } = useSelector((state) => state.employees);
  const { role: roleFilter, status: statusFilter } = useSelector((state) => state.form);
  const openProfile = (id) => {
    history.push(`/edit/${id}`);
  };
  const createProfile = () => {
    history.push('/create');
  };
  return (
    <div className={styles.listEmployees}>
      <div className="list">
        <button type="button" className="btn-add" onClick={createProfile}>
          Добавить сотрудника
        </button>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Имя</th>
              <th>Должность</th>
              <th>Номер телефона</th>
              <th>Год рождения</th>
            </tr>
          </thead>
          <tbody>
            {employees.reduce((filterEmp, employee) => {
              const {
                name, phone, role, birthday, id, isArchive,
              } = employee;
              const isRole = roleFilter === role || roleFilter === 'all';
              const isStatus = statusFilter === isArchive;
              if (isRole && isStatus) {
                return [
                  ...filterEmp,
                  <tr key={name} onClick={() => openProfile(id)}>
                    <td>{name}</td>
                    <td>{getRole(role)}</td>
                    <td>{phone}</td>
                    <td>{birthday}</td>
                  </tr>,
                ];
              }
              return filterEmp;
            }, [])}
          </tbody>
        </Table>
      </div>
    </div>
  );
};
