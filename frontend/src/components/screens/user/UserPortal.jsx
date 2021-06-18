import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Layout from './layout/Layout';
const UserHome = () => {
  return (
    <Layout>
      <Switch>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </Layout>
  );
};

export default UserHome;
