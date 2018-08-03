import React, { Component } from 'react';
import ClientList from './ClientList';
import {AdminMenu} from '../AdminMenu';

class ClientListContainer extends Component {
  render() {
    return (
      <div>
        <AdminMenu/>
        <ClientList/>
      </div>
    );
  }
}

export default ClientListContainer;