import React from 'react';
import { Menu, Icon } from 'antd';
import {Link} from 'react-router-dom';
const SubMenu = Menu.SubMenu;

export class AdminMenu extends React.Component {

  render() {
    return (
      <div style={{ width: 256 }}>

        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="ligth"
          style={{textAlign:'left'}}
        > 
          <Menu.Item  key="dashboard">
            <Link to={'/admin'} >
              <Icon type="appstore" />
              <span>Dashboard</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="pedidos">
            <Link to={'/admin'} >
              <Icon type="shopping-cart" />
              <span>Pedidos</span>
            </Link>
          </Menu.Item>
          <SubMenu key="distribuidores" title={<span><Icon type="team" /><span>Distribuidores</span></span>}>
            <Menu.Item key="dist_ver">
              <Link to={'/admin/clients'} >
                <Icon type="bars" />
                <span>Lista</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="dist_new">
              <Link to={'/admin'} >
                <Icon type="user-add" />
                <span>Crear Nuevo</span>
              </Link>
            </Menu.Item>
          </SubMenu>
          <Menu.Item key="logout">
            <Link to={'/'} >
              <Icon type="poweroff" />
              <span>Logout</span>
            </Link>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}