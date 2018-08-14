import React, { Component } from 'react';
import { Card, Button , message } from 'antd';
import reqwest from 'reqwest';
import Buscador from './Buscador';
import {ListaDist} from './ListaDist';
import {Link} from 'react-router-dom'



const fakeDataUrl = 'http://localhost:3000/user';

class AdminDist extends Component {

  state = {
    data: [],
    loading: false,
    hasMore: true,
    busqueda:''
  };

  getData = (callback) => {
    reqwest({
      url: fakeDataUrl,
      type: 'json',
      method: 'get',
      contentType: 'application/json',
      success: (res) => {
        callback(res);
      },
    });   
  };

  componentWillMount() {
    this.getData((res) => {
      this.setState({
        data: res,
      });
    });
  };

  handleInfiniteOnLoad = () => {
    let data = this.state.data;
    this.setState({
      loading: true,
    });
    if (data.length > 0) {
      message.warning('Infinite List loaded all');
      this.setState({
        hasMore: false,
        loading: false,
      });
      return;
    }
    this.getData((res) => {
      data = data.concat(res);
      this.setState({
        data,
        loading: false,
      });
    });
  };

  buscar=(informacion)=>{
    this.setState({busqueda:informacion})
  };


  render() {
    let {data, busqueda} = this.state
    let regEx = new RegExp(busqueda, 'i')
    data = data.filter(i=> regEx.exec(i.razonSocial) || regEx.exec(i.nombreContacto))
    return (
      <div style={{ flexWrap:'wrap', display: 'flex', alignItems: 'center', justifyContent: 'center', flexGrow:'1', flexDirection: 'column' }}>
      <Card title="Lista de Distribuidores" style={{margin:'20px', width: '80%' }}>
        <div style={{ flexWrap:'wrap', display: 'flex', alignItems: 'center', justifyContent: 'space-around', flexGrow:'1', flexDirection: 'row' }}>
        <Buscador busqueda={this.buscar}/>
            <Link to={'/admin/dist/new'}>
              <Button type="primary">Añadir Distribuidor</Button>
            </Link>
        </div>
      <br/><br/>
        <ListaDist {...this.state} lista={data} handleInfiniteOnLoad={this.handleInfiniteOnLoad}/>
      </Card>
  </div>
    );
  }
}

export default AdminDist;