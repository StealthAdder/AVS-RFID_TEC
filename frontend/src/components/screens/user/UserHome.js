import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Layout from './layout/Layout';
import Login from './components/Login';
const UserHome = () => {
  return (
    <Layout>
      <Switch>
        <Route path='/'>
          <Home />
        </Route>
        <Route path='/login' exact>
          <h1>sadasd</h1>
        </Route>
      </Switch>
    </Layout>
  );
};

export default UserHome;
