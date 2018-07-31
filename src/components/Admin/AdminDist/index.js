import React, { Component } from 'react';
import { Card, Button } from 'antd';
import Buscador from './Buscador';
import {ListaDist} from './ListaDist';


class AdminDist extends Component {
  render() {
    return (
      <div style={{ flexWrap:'wrap', display: 'flex', alignItems: 'center', justifyContent: 'center', flexGrow:'1', flexDirection: 'column' }}>
      <Card title="Lista de Distribuidores" style={{margin:'20px', width: '80%' }}>
        <div style={{ flexWrap:'wrap', display: 'flex', alignItems: 'center', justifyContent: 'space-around', flexGrow:'1', flexDirection: 'row' }}>
        <Buscador/>
        <Button type="primary">Añadir Distribuidor</Button>
        </div>
      <br/><br/>
        <ListaDist/>
      </Card>
      </div>
    );
  }
}

export default AdminDist;