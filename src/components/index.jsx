import React from 'react';
import Header from './header';
import Main from './main';
import Profile from './profile';
import styles from './app.scss';
import { Redirect, Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";

export default () => {
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
      </div>
    </BrowserRouter>
  );
};
