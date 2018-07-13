import React, {Component} from 'react';
import { AdminMenu } from './AdminMenu';
import ClientList from './ClientList';

class AdminPanel extends Component{
  render(){
    return(
      <div>
        <AdminMenu/>
      </div>
    )
  }
}


export default AdminPanel;
