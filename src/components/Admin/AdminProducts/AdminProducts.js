import React from 'react';
import { Button, Modal, Icon, Table } from 'antd';
import toastr from 'toastr';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as productsActions from '../../../redux/actions/productsActions';

class AdminProducts extends React.Component{

  componentWillMount(){
    console.log(this.context);
  }

  state = {
    products: [],
    visible: false,
    toDelete: {},
    columns: [
      { title: 'ID', dataIndex: 'id', align: 'center', width: 150 },
      { title: 'Nombre', dataIndex: 'name', align: 'center', width: 250 },
      { title: 'Precio', dataIndex: 'price', align: 'center', width: 100,
        render: (i) => `$ ${i}`
      },
      { title: 'Imagen', dataIndex: 'image', align: 'center', width: 300,
        render: () => <img src='https://s3.amazonaws.com/kichink/items_865660_246443_20160104113504_b.jpg' alt='imagen' width='10%' />,
      },
      { title: 'Stock', dataIndex: 'stock', align: 'center' },
      { title: 'Borrar',
        dataindex: 'action',
        align: 'center',
        render: (i, obj) => <a style={{ color: 'red' }} onClick={()=>this.showModal(obj)}> <Icon type="delete" /> </a>
      }
    ],
  };

  showModal = (obj) => {
    this.setState({visible: true, toDelete:obj});
  };

  handleCancel = () => {
    this.setState({visible: false});
  };

  handleOk = () => {
    const {products, toDelete} = this.state;
    const arr = products.filter((product, i) => {
      return product.id !== toDelete.id
    });
    console.log(toDelete);
    toastr.success(`${toDelete.name} Borrado` );
    this.setState({products: arr, visible: false});
  };

  render(){
    console.log(this.props);
    const {visible, columns} = this.state;
    const {products} = this.props;
    return(
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexGrow: '1' }}>
        <Modal visible={visible} title="¿Estás seguro de borrar este producto?" onOk={this.handleOk} onCancel={this.handleCancel}
          footer={[
            <Button key="cancel" onClick={this.handleCancel}>No</Button>,
            <Button type='danger' key="submit" onClick={this.handleOk}>Si</Button>,
          ]}
        >
          ¿Borrar?
        </Modal>
        <Table columns={columns} dataSource={products} style={{width: '90%', maxHeight:"100vh"}} />
      </div>
    )
  }
}

function mapStateToProps(state, ownProps){
  return {
    products: state.products
  }
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(productsActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminProducts);