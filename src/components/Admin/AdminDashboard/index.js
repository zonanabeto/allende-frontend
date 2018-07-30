import React, { Component } from 'react';
import ChartContainer from './ChartContainer';
import DashboardInfo from './DashboardInfo';


class AdminDashboard extends Component {
  render() {
    return (
      <div style={{ width:'90%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexGrow:'1', flexDirection: 'column' }}>
        <ChartContainer />
        <DashboardInfo/>
      </div>
    );
  }
}

export default AdminDashboard;