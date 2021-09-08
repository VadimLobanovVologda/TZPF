/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Header from './header';
import Main from './main';
import Profile from './profile';
import styles from './app.scss';

import { hideModal } from '../store/actions/employeeActions';

export default () => {
  const { modal } = useSelector((state) => state.employees);
  const dispatch = useDispatch();
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <Header />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/:action/:id" component={Profile} />
          <Route path="/:action" component={Profile} />
          <Redirect to="/" />
        </Switch>
        {modal.display ? (
          <div className="wrapModal" onClick={() => dispatch(hideModal())}>
            <div className="modal">
              Не заполнены поля:
              <hr />
              {' '}
              <span>{modal.text}</span>
            </div>
          </div>
        ) : null}
      </div>
    </BrowserRouter>
  );
};
