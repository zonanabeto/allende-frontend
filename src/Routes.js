import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomeContainer from "./components/HomePage/HomeContainer";

export const Routes = () => (
  <Switch>
    <Route exact path='/' component={HomeContainer} />
  </Switch>
);