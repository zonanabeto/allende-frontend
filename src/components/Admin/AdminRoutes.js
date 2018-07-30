import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import {AdminProfile} from "./AdminProfile";
import AdminDashboard from './AdminDashboard/index';
 './'

class AdminRoutes extends Component{
  render(){
    return(
      <Switch>
        <Route exact path='/admin' component={AdminProfile} />
        <Route exact path='/admin/profile' component={AdminProfile} />
        <Route exact path='/admin/dashboard' component={AdminDashboard} />
      </Switch>
    )
  }
}

export default AdminRoutes;