import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomeContainer from "./components/HomePage/HomeContainer";
import AdminPanel from './components/AdminPanel';
import ClientListContainer from './components/AdminPanel/ClientListContainer';

export const Routes = () => (
  <Switch>
    <Route exact path='/' component={HomeContainer} />
    <Route exact path='/admin' component={AdminPanel} />
    <Route exact path='/admin/clients' component={ClientListContainer} />
  </Switch>
);