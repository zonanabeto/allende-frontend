import React, { Component } from 'react';
import { Card } from 'antd';
import { ListaPedidos } from './ListaPedidos';


class AdminPedidos extends Component {
  render() {
    return (
      <div style={{ flexWrap:'wrap', display: 'flex', alignItems: 'center', justifyContent: 'center', flexGrow:'1', flexDirection: 'column' }}>
      <Card title="Lista de Pedidos" style={{margin:'20px', width: '80%' }}>
        <ListaPedidos/>
      </Card>
      </div>
    );
  }
}

export default AdminPedidos;