import React, { Component } from 'react';
import { DashboardList } from './DashboardList';
import { Card } from 'antd';

class DashboardInfo extends Component {
  render() {
    return (
      <div style={{flexWrap:'wrap', display: 'flex', alignItems: 'center', justifyContent: 'space-around', flexGrow:'1', flexDirection: 'row' }}>
        <Card title="Inventario" style={{margin:'10px', width: '500px' }}> 
          <DashboardList  />
        </Card>
        <Card title="Ultimos Pedidos" style={{margin:'10px', width: '500px' }}> 
          <DashboardList />
        </Card>
      </div>
    );
  }
}

export default DashboardInfo;