import React from 'react';
import {Card, Button, Modal, Input} from 'antd';
const {Meta} = Card;

class AdminProducts extends React.Component{

  state = {
    newProduct: {
      image: 'http://cerveceriaallende.mx/wp-content/uploads/2016/02/GoldenAleFinal2.png'
    },
    visible: false,
    products: [
      {
        name: 'Golden Ale',
        price: '$36.00',
        image: 'http://cerveceriaallende.mx/wp-content/uploads/2016/02/GoldenAleFinal2.png'
      },
      {
        name: 'BROWN ALE',
        price: '$36.00',
        image: 'http://cerveceriaallende.mx/wp-content/uploads/2016/02/BrownAleFinal2.png',
      },
      {
        name: 'AGAVE LAGER',
        price: '$36.00',
        image: 'http://cerveceriaallende.mx/wp-content/uploads/2014/08/AgaveFinal2.png'
      },
      {
        name: 'IPA',
        price: '$36.00',
        image: 'http://cerveceriaallende.mx/wp-content/uploads/2016/02/IpaFinal2.png'
      }
    ]
  };

  showModal = () => {
    this.setState({visible: true});
  };

  handleCancel = () => {
    this.setState({visible: false});
  };

  handleOk = () => {
    const {products, newProduct} = this.state;
    products.push(newProduct);
    this.setState({products, visible: false});
  };

  handleChange = (e) => {
    const {newProduct} = this.state;
    const field = e.target.name;
    newProduct[field] = e.target.value;
    this.setState({newProduct});
  };

  render(){
    const {products, visible} = this.state;
    return(
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexGrow: '1' }}>
        <Modal visible={visible} title="Crea Nuevo Producto" onOk={this.handleOk} onCancel={this.handleCancel}
          footer={[
            <Button key="cancel" onClick={this.handleCancel}>Cancelar</Button>,
            <Button key="submit" type="primary" onClick={this.handleOk}>Crear</Button>,
          ]}
        >
          <Input placeholder="Nombre del producto" name="name" onChange={this.handleChange} />
          <br/><br/>
          <Input placeholder="Precio del producto" name="price" onChange={this.handleChange} />
        </Modal>
        {products.map(product => (
          <Card hoverable style={{ width: 240, margin:"0 10px", boxSizing:"border-box" }} cover={<img alt="example" src={product.image} height="50%" />} >
            <Meta title={product.name} description={product.price} />
          </Card>
        ))}
        <Button type="primary" shape="circle" icon="plus" size="large" onClick={this.showModal} style={{width: '50px', height: '50px', position: 'fixed', bottom: '25px', right: '25px' }} />
      </div>
    )
  }
}

export default AdminProducts;