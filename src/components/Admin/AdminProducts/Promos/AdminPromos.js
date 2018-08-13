import React, {Component} from 'react';
import {Card} from 'antd';
import {getPromos} from "../../../../services/productsServices";
const { Meta } = Card;

class AdminPromos extends Component{

  componentWillMount(){
    getPromos()
    .then(promos => {
      this.setState({promos});
    })
    .catch(e => console.log(e))
  }

  state = {
    promos: []
  };

  render(){
    const {promos} = this.state;
    return(
      <div  style={{ display:'flex', justifyContent:'center', alignItems:'center', width:'90%', flexWrap: 'wrap' }}>
        <Card title='Promociones'>
          <div style={{ display:'flex' }} >
            {promos.map(promo => {
            const precio = '$ ' + promo.promoPrice;
            return(
              <Card key={promo._id} hoverable style={{ width: 240, margin: "10px" }} cover={<img alt={promo._id} src={promo.image} />}>
                <Meta title={promo.promoName} description={precio} />
              </Card>
            )
          })}
          </div>
        </Card>
      </div>
    )
  }
}

export default AdminPromos;