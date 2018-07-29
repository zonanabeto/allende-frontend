import React, {Component} from 'react';
import {Menu, Icon} from 'antd';
import {Link} from 'react-router-dom';
import logo from '../../assets/logoallende.png';

class AdminPanel extends Component{
  render(){
    return(
        <div style={{ width: 200 }}>
          <Menu mode="inline" theme="dark" inlineCollapsed={false} defaultSelectedKeys={['1']} style={{ height: '100vh' }}>
            <div style={{ marginTop: '30px', marginBottom: '30px' }}>
              <img src={logo} alt="allende" width="70%" />
            </div>
            <Menu.Item key="1">
              <Link to="/admin/profile">
                <Icon type="user" />
                <span>Perfil</span>
              </Link>
            </Menu.Item>
          </Menu>
      </div>
    )
  }
}

export default AdminPanel;