import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import {AdminProfile} from "./AdminProfile";

class AdminRoutes extends Component{
  render(){
    return(
      <Switch>
        <Route exact path='/admin' component={AdminProfile} />
        <Route exact path='/admin/profile' component={AdminProfile} />
      </Switch>
    )
  }
}

export default AdminRoutes;