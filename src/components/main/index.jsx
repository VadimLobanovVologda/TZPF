import React from 'react';
import FormFilter from './formFilter';
import ListEmployees from './listEmployees';
import styles from './main.scss';

export default () => (
  <main className={styles.main}>
    <div className="mainContent">
      <FormFilter />
      <ListEmployees />
    </div>
  </main>
);
