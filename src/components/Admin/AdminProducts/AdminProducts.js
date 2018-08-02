import React from 'react';
import { Button, Modal, Icon, Table } from 'antd';
import toastr from 'toastr';

class AdminProducts extends React.Component{

  state = {
    visible: false,
    toDelete: {},
    products: [
      {
        id: '1',
        name: 'Brown Ale',
        price: '$36.00',
        stock: '1000'
      },
      {
        id: '2',
        name: 'Agave Lager',
        price: '$36.00',
        stock: '1000'
      },
      {
        id: '3',
        name: 'IPA',
        price: '$36.00',
        stock: '1000'
      },
      {
        id: '4',
        name: 'Golden Ale',
        price: '$36.00',
        stock: '1000'
      }
    ],
    columns: [
      { title: 'ID', dataIndex: 'id', align: 'center' },
      { title: 'Nombre', dataIndex: 'name', align: 'center' },
      { title: 'Precio', dataIndex: 'price', align: 'center' },
      { title: 'Imagen', dataIndex: 'image', align: 'center',
        render: () => <img src='https://s3.amazonaws.com/kichink/items_865660_246443_20160104113504_b.jpg' alt='imagen' width='10%'/>,
      },
      { title: 'Stock', dataIndex: 'stock', align: 'center' },
      { title: <Icon type="delete" />,
        dataindex: 'action',
        align: 'center',
        render: (i, obj) => <a style={{ color: 'red' }} onClick={()=>this.showModal(obj)}>Borrar</a>
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

  handleChange = (e) => {
    const {newProduct} = this.state;
    const field = e.target.name;
    newProduct[field] = e.target.value;
    this.setState({newProduct});
  };

  render(){
    const {products, visible, columns} = this.state;
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

export default AdminProducts;