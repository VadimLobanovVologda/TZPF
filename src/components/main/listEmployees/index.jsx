import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { getRole } from 'helpers';
import styles from './listEmployees.scss';

export default () => {
  const history = useHistory();
  const { employees } = useSelector((state) => state.employees);
  const { role: roleFilter, status: statusFilter } = useSelector((state) => state.form);
  const [users, setUsers] = useState(employees);
  const [sortName, setSortName] = useState(false);
  const [sortDate, setSortDate] = useState(false);

  const openProfile = (id) => {
    history.push(`/edit/${id}`);
  };
  const createProfile = () => {
    history.push('/create');
  };

  const sortTable = (prop) => {
    if (prop === 'name') {
      const newTable = employees.sort((a, b) => {
        if (a[`${prop}`] < b[`${prop}`]) return sortName ? 1 : -1;
        if (a[`${prop}`] > b[`${prop}`]) return sortName ? -1 : 1;
        return 0;
      });
      setSortName(!sortName);
      setUsers(newTable);
      return;
    }
    if (prop === 'birthday') {
      const newTable = employees.sort((a, b) => {
        if (new Date(a[`${prop}`]) < new Date(b[`${prop}`])) return sortDate ? 1 : -1;
        if (new Date(a[`${prop}`]) > new Date(b[`${prop}`])) return sortDate ? -1 : 1;
        return 0;
      });
      setSortDate(!sortDate);
      setUsers(newTable);
    }
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
              <th onClick={() => sortTable('name')}>
                Имя
                {' '}
                {sortName ? '▼' : '▲'}
              </th>
              <th>Должность</th>
              <th>Номер телефона</th>
              <th onClick={() => sortTable('birthday')}>
                Год рождения
                {' '}
                {sortDate ? '▼' : '▲'}
              </th>
            </tr>
          </thead>
          <tbody>
            {users.reduce((filterEmp, employee) => {
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
