import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Card} from 'antd';
import {withRouter} from 'react-router-dom'


class ViewDist extends Component {

  render() {
    let distribuidor = this.props.distribuidores.filter(e=>e._id===this.props.match.params.id);
   
    return (
      <div style={{ flexWrap:'wrap', display: 'flex', alignItems: 'center', justifyContent: 'center', flexGrow:'1', flexDirection: 'column' }}>
      <Card title={distribuidor.length > 0 ? `Distribuidor ${distribuidor[0].razonSocial}` : ""} style={{margin:'20px', width: '80%' }}>
        <div style={{margin:'20px'}}>
          <h3>Informacion del Distribuidor:</h3>
          <br/>
          <div style={{ flexWrap:'wrap', display: 'flex', alignItems: 'center', justifyContent: 'space-around', flexDirection: 'row' }}>
          <ul style={{listStyleType:'none', textAlign:'left'}} >
            <li className='liDistView' ><span style={{fontWeight:'bold'}}>ID: </span>{distribuidor.length > 0 ? distribuidor[0]._id : ""} </li>
            <li className='liDistView' ><span style={{fontWeight:'bold'}}>Razon Social: </span>{distribuidor.length > 0 ? distribuidor[0].razonSocial : ""}</li>
            <li className='liDistView' ><span style={{fontWeight:'bold'}}>Status: </span>{distribuidor.length > 0 ? distribuidor[0].active : ""}</li>
            <li className='liDistView' ><span style={{fontWeight:'bold'}}>Contacto: </span>{distribuidor.length > 0 ? distribuidor[0].contactName : ""}</li>
            <li className='liDistView' ><span style={{fontWeight:'bold'}}>Telefono: </span>{distribuidor.length > 0 ? distribuidor[0].phoneNumber : ""} </li>
            <li className='liDistView' ><span style={{fontWeight:'bold'}}>Email: </span>{distribuidor.length > 0 ? distribuidor[0].email : ""}</li>
            <li className='liDistView' ><span style={{fontWeight:'bold'}}>Direccion Fiscal: </span>{distribuidor.length > 0 ? distribuidor[0].addressFiscal : ""}</li>
            <li className='liDistView' ><span style={{fontWeight:'bold'}}>RFC: </span>{distribuidor.length > 0 ? distribuidor[0].rfc : ""}</li>
         </ul>
          <ul style={{listStyleType:'none', textAlign:'left'}} >
            <li className='liDistView' ><span style={{fontWeight:'bold'}}>Direccion de entrega: </span>{distribuidor.length > 0 ? distribuidor[0].address : ""}</li>
            <li className='liDistView' ><span style={{fontWeight:'bold'}}>Area/Zona: </span>{distribuidor.length > 0 ? distribuidor[0].area : ""}</li>
            <li className='liDistView' ><span style={{fontWeight:'bold'}}>Monto de Credito: </span>{distribuidor.length > 0 ? distribuidor[0].creditAmount : ""}</li>
            <li className='liDistView' ><span style={{fontWeight:'bold'}}>Dias de Credito: </span>{distribuidor.length > 0 ? distribuidor[0].creditDays : ""}</li>
            <li className='liDistView' ><span style={{fontWeight:'bold'}}>Descuento: </span>{distribuidor.length > 0 ? distribuidor[0].discount : ""}</li>
          </ul>
          </div>
        </div>
    </Card>
    </div>
    );
  }
}



function mapStateToProps(state){
  return {
    distribuidores: state.distribuidores
  }
}

export default withRouter(connect(mapStateToProps,null)(ViewDist));